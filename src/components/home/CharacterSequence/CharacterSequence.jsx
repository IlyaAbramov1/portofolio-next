"use client";

import { useEffect, useState } from "react";

import styles from "./CharacterSequence.module.css";

const FRAME_COUNT = 33;
const SEQUENCE_DURATION = 2200;
const FRAME_DURATION = SEQUENCE_DURATION / FRAME_COUNT;
const FRAME_PATHS = Array.from(
    { length: FRAME_COUNT },
    (_, index) => `/person_frames/person_${String(index).padStart(5, "0")}.png`
);

let preloadedFrames = null;
let preloadPromise = null;

function preloadFrame(src) {
    return new Promise((resolve, reject) => {
        const image = new window.Image();

        const cleanup = () => {
            image.onload = null;
            image.onerror = null;
        };

        image.onload = async () => {
            try {
                if (typeof image.decode === "function") {
                    await image.decode();
                }
            } catch {
                // The frame is still usable after a successful load.
            }

            cleanup();
            resolve(image);
        };

        image.onerror = () => {
            cleanup();
            reject(new Error(`Failed to preload animation frame: ${src}`));
        };

        image.decoding = "async";
        image.src = src;
    });
}

function preloadFrames() {
    if (preloadedFrames) {
        return Promise.resolve(preloadedFrames);
    }

    if (!preloadPromise) {
        preloadPromise = Promise.all(FRAME_PATHS.map(preloadFrame))
            .then((frames) => {
                preloadedFrames = frames;
                return frames;
            })
            .catch((error) => {
                preloadPromise = null;
                throw error;
            });
    }

    return preloadPromise;
}

function useFramesReady() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let isActive = true;

        preloadFrames()
            .then(() => {
                if (isActive) setIsReady(true);
            })
            .catch(() => undefined);

        return () => {
            isActive = false;
        };
    }, []);

    return isReady;
}

export default function CharacterSequence() {
    const isReady = useFramesReady();

    return (
        <div className={styles.stage}>
            <div
                className={`${styles.sequence} ${isReady ? styles.isReady : ""}`}
                aria-hidden="true"
            >
                {FRAME_PATHS.map((src, index) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={src}
                        className={styles.frame}
                        src={src}
                        alt=""
                        style={{ "--frame-delay": `${index * FRAME_DURATION}ms` }}
                    />
                ))}
            </div>
        </div>
    );
}
