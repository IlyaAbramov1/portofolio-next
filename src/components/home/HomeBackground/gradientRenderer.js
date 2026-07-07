import { FRAGMENT_SHADER, VERTEX_SHADER } from "./shaderSource";

const CANVAS_CONTEXT_OPTIONS = {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
};

const DEFAULT_PALETTE = {
    background: [243 / 255, 245 / 255, 247 / 255],
    dark: [0, 112 / 255, 235 / 255],
    light: [243 / 255, 245 / 255, 247 / 255],
    mid: [146 / 255, 226 / 255, 247 / 255],
    pink: [232 / 255, 130 / 255, 204 / 255],
};

const FULLSCREEN_QUAD = new Float32Array([
    -1, -1,
    1, -1,
    -1, 1,
    -1, 1,
    1, -1,
    1, 1,
]);

function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function createShaderProgram(gl) {
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) {
        if (vertexShader) gl.deleteShader(vertexShader);
        if (fragmentShader) gl.deleteShader(fragmentShader);
        return null;
    }

    const program = gl.createProgram();
    if (!program) {
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }

    return {
        fragmentShader,
        program,
        vertexShader,
    };
}

function createQuadBuffer(gl) {
    const buffer = gl.createBuffer();
    if (!buffer) return null;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, FULLSCREEN_QUAD, gl.STATIC_DRAW);

    return buffer;
}

function resizeCanvasToDisplaySize(gl, canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));

    if (canvas.width === width && canvas.height === height) return;

    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
}

function parseRgbTriplet(value, fallback) {
    const channels = value
        .trim()
        .split(/[\s,]+/)
        .map(Number);

    if (channels.length !== 3 || channels.some((channel) => !Number.isFinite(channel))) {
        return fallback;
    }

    return channels.map((channel) => Math.min(255, Math.max(0, channel)) / 255);
}

function normalizeColorTriplet(value) {
    if (!Array.isArray(value) || value.length !== 3) return null;

    const channels = value.map(Number);
    if (channels.some((channel) => !Number.isFinite(channel))) return null;

    const divider = channels.some((channel) => channel > 1) ? 255 : 1;
    return channels.map((channel) => Math.min(divider, Math.max(0, channel)) / divider);
}

function readPalette(canvas, overrides = {}) {
    const styles = window.getComputedStyle(canvas);
    const backgroundOverride = normalizeColorTriplet(overrides.backgroundColor);
    const darkOverride = normalizeColorTriplet(overrides.darkColor);
    const lightOverride = normalizeColorTriplet(overrides.lightColor);
    const midOverride = normalizeColorTriplet(overrides.midColor);
    const pinkOverride = normalizeColorTriplet(overrides.pinkColor);
    const mode = overrides.mode || styles.getPropertyValue("--home-background-mode").trim();

    return {
        background: backgroundOverride
            || parseRgbTriplet(
                styles.getPropertyValue("--home-background-bg-rgb"),
                DEFAULT_PALETTE.background,
            ),
        dark: darkOverride
            || parseRgbTriplet(
                styles.getPropertyValue("--home-background-dark-rgb"),
                DEFAULT_PALETTE.dark,
            ),
        light: lightOverride
            || parseRgbTriplet(
                styles.getPropertyValue("--home-background-light-rgb"),
                DEFAULT_PALETTE.light,
            ),
        mid: midOverride
            || parseRgbTriplet(
                styles.getPropertyValue("--home-background-mid-rgb"),
                DEFAULT_PALETTE.mid,
            ),
        pink: pinkOverride
            || parseRgbTriplet(
                styles.getPropertyValue("--home-background-pink-rgb"),
                DEFAULT_PALETTE.pink,
            ),
        mode: mode === "library" ? 1 : 0,
    };
}

export function createGradientRenderer(canvas, options = {}) {
    const gl = canvas.getContext("webgl", CANVAS_CONTEXT_OPTIONS);
    if (!gl) return null;

    const shaderProgram = createShaderProgram(gl);
    if (!shaderProgram) return null;

    const { fragmentShader, program, vertexShader } = shaderProgram;
    const buffer = createQuadBuffer(gl);

    if (!buffer) {
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }

    const positionLocation = gl.getAttribLocation(program, "position");
    const resolutionLocation = gl.getUniformLocation(program, "iResolution");
    const timeLocation = gl.getUniformLocation(program, "iTime");
    const backgroundColorLocation = gl.getUniformLocation(program, "uBackgroundColor");
    const darkColorLocation = gl.getUniformLocation(program, "uColorDark");
    const lightColorLocation = gl.getUniformLocation(program, "uColorLight");
    const midColorLocation = gl.getUniformLocation(program, "uColorMid");
    const pinkColorLocation = gl.getUniformLocation(program, "uColorPink");
    const gradientModeLocation = gl.getUniformLocation(program, "uGradientMode");

    if (
        positionLocation < 0
        || !resolutionLocation
        || !timeLocation
        || !backgroundColorLocation
        || !darkColorLocation
        || !lightColorLocation
        || !midColorLocation
        || !pinkColorLocation
        || !gradientModeLocation
    ) {
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }

    let animationFrame = 0;
    let isDisposed = false;
    let isRunning = false;
    let palette = readPalette(canvas, options);

    const resize = () => {
        resizeCanvasToDisplaySize(gl, canvas);
    };

    const syncPalette = () => {
        palette = readPalette(canvas, options);
    };

    const draw = (time) => {
        if (isDisposed) return;

        resize();

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(timeLocation, time * 0.001);
        gl.uniform3fv(backgroundColorLocation, palette.background);
        gl.uniform3fv(darkColorLocation, palette.dark);
        gl.uniform3fv(lightColorLocation, palette.light);
        gl.uniform3fv(midColorLocation, palette.mid);
        gl.uniform3fv(pinkColorLocation, palette.pink);
        gl.uniform1i(gradientModeLocation, palette.mode);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        animationFrame = requestAnimationFrame(draw);
    };

    return {
        start() {
            if (isRunning || isDisposed) return;

            isRunning = true;
            resize();
            window.addEventListener("resize", resize);
            window.addEventListener("themechange", syncPalette);
            animationFrame = requestAnimationFrame(draw);
        },
        dispose() {
            if (isDisposed) return;

            isDisposed = true;
            isRunning = false;
            window.removeEventListener("resize", resize);
            window.removeEventListener("themechange", syncPalette);
            if (animationFrame) cancelAnimationFrame(animationFrame);
            gl.deleteBuffer(buffer);
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
        },
    };
}
