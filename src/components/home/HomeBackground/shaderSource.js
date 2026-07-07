export const VERTEX_SHADER = `
attribute vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uBackgroundColor;
uniform vec3 uColorDark;
uniform vec3 uColorMid;
uniform vec3 uColorLight;
uniform vec3 uColorPink;
uniform int uGradientMode;

#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a)
{
    float s = sin(a);
    float c = cos(a);
    return mat2(c, s, s, c);
}

mat2 RotLibrary(float a)
{
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p)
{
    p = vec2(
        dot(p, vec2(2127.1, 81.17)),
        dot(p, vec2(1269.5, 283.37))
    );

    return fract(sin(p) * 43758.5453);
}

float noise(in vec2 p)
{
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f * f * (3.0 - 2.0 * f);

    float n = mix(
        mix(
            dot(-1.0 + 2.0 * hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)),
            u.x
        ),
        mix(
            dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)),
            u.x
        ),
        u.y
    );

    return 0.5 + 0.5 * n;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;

    float pixelSize = 1200.0;
    uv = floor(uv * pixelSize) / pixelSize;

    float ratio = iResolution.x / iResolution.y;

    vec2 tuv = uv;
    tuv -= 0.5;

    float degree = noise(vec2(iTime * 0.1, tuv.x * tuv.y));

    tuv.y *= 1.0 / ratio;

    float rotationAngle = radians((degree - 0.5) * 720.0 + 180.0);

    if (uGradientMode == 1) {
        tuv *= RotLibrary(rotationAngle);
    } else {
        tuv *= Rot(rotationAngle);
    }

    tuv.y *= ratio;

    float frequency = uGradientMode == 1 ? 5.0 : 1.0;
    float amplitude = uGradientMode == 1 ? 30.0 : 45.0;
    float speed = iTime * 2.0;

    tuv.x += sin(tuv.y * frequency + speed) / amplitude;

    tuv.y += sin(
        tuv.x * frequency * 1.5 + speed
    ) / (amplitude * 0.5);

    vec3 bgColor    = uBackgroundColor;
    vec3 colorDark  = uColorDark;
    vec3 colorMid   = uColorMid;
    vec3 colorLight = uColorLight;
    vec3 colorPink  = uColorPink;

    if (uGradientMode == 1) {
        vec3 layerA = mix(
            colorLight,
            colorDark,
            S(-0.3, 0.2, (tuv * RotLibrary(radians(-5.0))).x)
        );

        vec3 layerB = mix(
            colorPink,
            colorMid,
            S(-0.3, 0.2, (tuv * RotLibrary(radians(-5.0))).x)
        );

        vec3 col = mix(layerA, layerB, S(0.62, -0.18, tuv.y));
        col = mix(col, colorDark, 0.28);
        col = mix(col, colorMid, 0.06);

        fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
        return;
    }

    colorLight = bgColor;

    vec3 layer1 = mix(
        colorLight,
        colorMid,
        S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x)
    );

    vec3 layer2 = mix(
        colorMid,
        colorDark,
        S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x)
    );

    float verticalWave =
        sin(uv.x * 3.2 + speed * 0.24) * 0.065 +
        sin(uv.x * 7.4 - speed * 0.16) * 0.025 +
        (noise(vec2(uv.x * 2.6, iTime * 0.08)) - 0.5) * 0.04;

    float blueAnchor = clamp(uv.y + verticalWave, 0.0, 1.0);

    vec3 finalComp = mix(
        layer1,
        layer2,
        S(0.42, 0.78, blueAnchor)
    );

    finalComp = mix(
        finalComp,
        vec3(dot(finalComp, vec3(0.333))),
        0.001
    );

    float finalLuma = dot(finalComp, vec3(0.299, 0.587, 0.114));
    finalComp = mix(vec3(finalLuma), finalComp, 1.4);

    float whiteFade = smoothstep(
        0.02,
        0.62,
        uv.y
    );

    vec3 col = mix(
        bgColor,
        finalComp,
        whiteFade
    );

    col = mix(bgColor, col * 1.12, whiteFade);

    vec2 grid = fract(fragCoord / 8.0);

    float line =
        step(0.2, grid.x) +
        step(0.2, grid.y);

    col *= 1.0 - line * 0.05;
    col = mix(bgColor, col, whiteFade);
    col = clamp(col, 0.0, 1.0);

    fragColor = vec4(col, 1);
}

void main() {
    vec4 color = vec4(0.0);
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
}
`;
