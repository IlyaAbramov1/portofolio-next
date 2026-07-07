"use client";

import { useEffect, useRef } from "react";
import { createGradientRenderer } from "./gradientRenderer";

import styles from "./HomeBackground.module.css";

export default function HomeBackground({
    backgroundColor,
    darkColor,
    lightColor,
    midColor,
    mode,
    pinkColor,
    placement = "top",
}) {
    const canvasRef = useRef(null);
    const className = [
        styles.background,
        placement === "bottom" ? styles.bottom : "",
        placement === "fill" ? styles.fill : "",
        placement === "top" ? styles.top : "",
    ].join(" ");

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const renderer = createGradientRenderer(canvas, {
            backgroundColor,
            darkColor,
            lightColor,
            midColor,
            mode,
            pinkColor,
        });
        renderer?.start();

        return () => {
            renderer?.dispose();
        };
    }, [backgroundColor, darkColor, lightColor, midColor, mode, pinkColor]);

    return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
