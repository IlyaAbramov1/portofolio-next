"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal/Reveal";
import MorphText from "@/components/ui/MorphText/MorphText";

import styles from "./FollowSection.module.css";

const CHAR = "ABRAMOV_DESIGN_abramov_design";
const FRAMES = 300;
const BLUR_STEPS = 40;
const ASCII_FONT_SIZE_DESKTOP = 12;
const ASCII_FONT_SIZE_MOBILE = 14;

const easeQuadInOut = (t) => {
    if (t < 0.5) return 2 * t * t;
    return 1 - ((-2 * t + 2) ** 2) / 2;
};

class FrameLoop {
    constructor(totalFrames, min = 0, max = 1, yoyo = false, ease = (v) => v) {
        this.totalFrames = totalFrames;
        this.min = min;
        this.max = max;
        this.yoyo = yoyo;
        this.ease = ease;
        this.frame = 0;
        this.direction = 1;
        this.value = min;
    }

    set(frame) {
        this.frame = Math.max(0, Math.min(this.totalFrames, frame));
        this.value = this.sample(this.frame);
    }

    sample(frame) {
        const t = frame / this.totalFrames;
        const eased = this.ease(t);
        return this.min + (this.max - this.min) * eased;
    }

    inc() {
        this.frame += this.direction;

        if (this.yoyo) {
            if (this.frame >= this.totalFrames) {
                this.frame = this.totalFrames;
                this.direction = -1;
            } else if (this.frame <= 0) {
                this.frame = 0;
                this.direction = 1;
            }
        } else if (this.frame > this.totalFrames) {
            this.frame = 0;
        }

        this.value = this.sample(this.frame);
    }
}

const randomFloat = (max) => Math.random() * max;
const mapRange = (value, inMin, inMax, outMin, outMax) => {
    if (inMax === inMin) return outMin;
    const normalized = (value - inMin) / (inMax - inMin);
    return outMin + normalized * (outMax - outMin);
};

function createWaveMap(width, height) {
    const max = CHAR.length * 2 - 2;
    let waveMap = Array.from({ length: height }, () =>
        Array.from({ length: width }, () => randomFloat(max))
    );

    for (let step = 0; step < BLUR_STEPS; step += 1) {
        const next = Array.from({ length: height }, (_, y) =>
            Array.from({ length: width }, (_, x) => {
                const value = waveMap[y][x];
                const left = waveMap[y][x > 0 ? x - 1 : x];
                const right = waveMap[y][x < width - 1 ? x + 1 : x];
                const top = waveMap[y > 0 ? y - 1 : y][x];
                const bottom = waveMap[y < height - 1 ? y + 1 : y][x];
                return (value + left + right + top + bottom) / 5;
            })
        );
        waveMap = next;
    }

    let minValue = Infinity;
    let maxValue = -Infinity;
    for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
            minValue = Math.min(minValue, waveMap[y][x]);
            maxValue = Math.max(maxValue, waveMap[y][x]);
        }
    }

    return Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => {
            const frame = Math.floor(mapRange(waveMap[y][x], minValue, maxValue, 0, FRAMES));
            const loop = new FrameLoop(FRAMES, 0, CHAR.length - 1, true, easeQuadInOut);
            loop.set(frame);
            return loop;
        })
    );
}

function AsciiWave() {
    const containerRef = useRef(null);
    const [asciiText, setAsciiText] = useState("");

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        let animationFrame = null;
        let resizeFrame = null;
        let waveMap = [];
        let width = 0;
        let height = 0;

        const measureGrid = () => {
            const measure = document.createElement("span");
            measure.className = styles.measureChar;
            measure.textContent = "M";
            container.appendChild(measure);
            const charWidth = measure.getBoundingClientRect().width || 8;
            const charHeight = measure.getBoundingClientRect().height || 16;
            container.removeChild(measure);

            // Fill with a slight overscan so the pre area never has empty strips.
            const nextWidth = Math.max(1, Math.ceil(container.clientWidth / charWidth) + 1);
            const nextHeight = Math.max(1, Math.ceil(container.clientHeight / charHeight) + 1);

            if (nextWidth !== width || nextHeight !== height) {
                width = nextWidth;
                height = nextHeight;
                waveMap = createWaveMap(width, height);
            }
        };

        const draw = () => {
            const rows = new Array(height);

            for (let y = 0; y < height; y += 1) {
                const chars = new Array(width);
                for (let x = 0; x < width; x += 1) {
                    const value = Math.round(waveMap[y][x].value);
                    chars[x] = CHAR[value] || CHAR[0];
                    waveMap[y][x].inc();
                }
                rows[y] = chars.join("");
            }

            setAsciiText(rows.join("\n"));
            animationFrame = requestAnimationFrame(draw);
        };

        measureGrid();
        draw();

        const observer = new ResizeObserver(() => {
            if (resizeFrame) cancelAnimationFrame(resizeFrame);
            resizeFrame = requestAnimationFrame(measureGrid);
        });

        observer.observe(container);

        return () => {
            observer.disconnect();
            if (animationFrame) cancelAnimationFrame(animationFrame);
            if (resizeFrame) cancelAnimationFrame(resizeFrame);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={styles.asciiContainer}
            style={{
                "--ascii-font-size": `${ASCII_FONT_SIZE_DESKTOP}px`,
                "--ascii-font-size-mobile": `${ASCII_FONT_SIZE_MOBILE}px`,
            }}
        >
            <pre className={styles.asciiText} aria-hidden="true">{asciiText}</pre>
            <div className={styles.centerContent}>
                <MorphText>
                    <a
                        href="https://t.me/tehnichka_design/"
                        className={`link ${styles.centerLink}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Мой Телеграм-канал↗
                    </a>
                </MorphText>
            </div>
        </div>
    );
}

export default function FollowSection() {
    return (
        <section id="aboutMe" className={`innerContainer ${styles.followSection}`}>
            <Reveal>
                <AsciiWave />
            </Reveal>
        </section>
    );
}
