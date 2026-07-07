"use client";

import { useEffect, useId, useRef, useState } from "react";
import { withAssetVersion } from "@/lib/assets";

import styles from "./AnimatedSvgIcon.module.css";

const GLINT_DURATION = 720;
const GLINT_DELAY_RANGE = 320;
const GLINT_RESET_DELAY = GLINT_DURATION + GLINT_DELAY_RANGE + 80;

function readNumber(value, fallback = 0) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function readTransformOffset(transform, axis) {
    if (!transform) return 0;

    const matrixMatch = transform.match(/matrix\(([^)]+)\)/);
    if (!matrixMatch) return 0;

    const values = matrixMatch[1]
        .split(/[\s,]+/)
        .map((value) => Number.parseFloat(value))
        .filter(Number.isFinite);

    return values[axis === "x" ? 4 : 5] || 0;
}

function getDotPosition(dot) {
    const tagName = dot.tagName.toLowerCase();
    const transform = dot.getAttribute("transform");
    const xAttribute = tagName === "circle" ? "cx" : "x";
    const yAttribute = tagName === "circle" ? "cy" : "y";

    return {
        x: readNumber(dot.getAttribute(xAttribute)) + readTransformOffset(transform, "x"),
        y: readNumber(dot.getAttribute(yAttribute)) + readTransformOffset(transform, "y"),
    };
}

function uniquifySvgIds(svg, idPrefix) {
    const idMap = new Map();
    const elementsWithIds = Array.from(svg.querySelectorAll("[id]"));

    elementsWithIds.forEach((element) => {
        const id = element.getAttribute("id");
        const nextId = `${idPrefix}-${id}`;

        idMap.set(id, nextId);
        element.setAttribute("id", nextId);
    });

    if (idMap.size === 0) return;

    Array.from(svg.querySelectorAll("*")).forEach((element) => {
        Array.from(element.attributes).forEach((attribute) => {
            let nextValue = attribute.value;

            idMap.forEach((nextId, id) => {
                nextValue = nextValue
                    .replaceAll(`url(#${id})`, `url(#${nextId})`)
                    .replaceAll(`#${id}`, `#${nextId}`);
            });

            if (nextValue !== attribute.value) {
                element.setAttribute(attribute.name, nextValue);
            }
        });
    });
}

function prepareSvgMarkup(markup, idPrefix) {
    const document = new DOMParser().parseFromString(markup, "image/svg+xml");
    const svg = document.querySelector("svg");

    if (!svg) return "";

    uniquifySvgIds(svg, idPrefix);
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.classList.add(styles.svg);

    const dots = Array.from(svg.querySelectorAll("rect, circle")).filter(
        (dot) => !dot.closest("defs, clipPath, mask")
    );
    const positions = dots.map(getDotPosition);
    const diagonals = positions.map(({ x, y }) => x + y);
    const minDiagonal = Math.min(...diagonals, 0);
    const maxDiagonal = Math.max(...diagonals, 1);
    const diagonalRange = Math.max(maxDiagonal - minDiagonal, 1);

    dots.forEach((dot, index) => {
        const diagonalProgress = (diagonals[index] - minDiagonal) / diagonalRange;
        const delay = Math.round(diagonalProgress * 320);

        dot.dataset.animatedIconDot = "";
        dot.style.setProperty("--icon-dot-delay", `${delay}ms`);
        dot.style.setProperty(
            "--icon-dot-original-fill",
            dot.getAttribute("fill") || "currentColor"
        );
    });

    return svg.outerHTML;
}

export default function AnimatedSvgIcon({
    className = "",
    src,
    size = 16,
}) {
    const [markup, setMarkup] = useState("");
    const iconId = useId().replaceAll(":", "");
    const iconRef = useRef(null);
    const timeoutRef = useRef(0);

    useEffect(() => {
        let isActive = true;

        fetch(withAssetVersion(src))
            .then((response) => (response.ok ? response.text() : ""))
            .then((svgMarkup) => {
                if (isActive) setMarkup(prepareSvgMarkup(svgMarkup, iconId));
            })
            .catch(() => {
                if (isActive) setMarkup("");
            });

        return () => {
            isActive = false;
        };
    }, [iconId, src]);

    useEffect(() => {
        const icon = iconRef.current;
        if (!icon) return undefined;

        const triggerTarget = icon.closest("a, button, .link") || icon;

        const startGlint = () => {
            window.clearTimeout(timeoutRef.current);
            delete icon.dataset.animating;
            void icon.offsetWidth;
            icon.dataset.animating = "true";
            timeoutRef.current = window.setTimeout(() => {
                delete icon.dataset.animating;
            }, GLINT_RESET_DELAY);
        };

        triggerTarget.addEventListener("pointerenter", startGlint);
        triggerTarget.addEventListener("focusin", startGlint);

        return () => {
            triggerTarget.removeEventListener("pointerenter", startGlint);
            triggerTarget.removeEventListener("focusin", startGlint);
            window.clearTimeout(timeoutRef.current);
        };
    }, [markup]);

    return (
        <span
            ref={iconRef}
            className={`${styles.icon} ${className}`.trim()}
            style={{
                "--icon-size": `${size}px`,
            }}
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
}
