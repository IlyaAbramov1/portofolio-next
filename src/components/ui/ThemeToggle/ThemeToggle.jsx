"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof document === "undefined" || typeof window === "undefined") return;
        const savedTheme = window.localStorage.getItem("theme");
        const nextIsDark =
            savedTheme === "dark" || document.body.classList.contains("dark-theme");
        document.body.classList.toggle("dark-theme", nextIsDark);
        setIsDark(nextIsDark);
    }, []);

    const handleToggle = () => {
        if (typeof document === "undefined" || typeof window === "undefined") return;
        const nextIsDark = !document.body.classList.contains("dark-theme");
        document.body.classList.toggle("dark-theme", nextIsDark);
        window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
        setIsDark(nextIsDark);
    };

    return (
        <button
            type="button"
            className={styles.themeToggle}
            onClick={handleToggle}
            aria-pressed={isDark}
            aria-label="Переключить тему"
        >
            <img
                src={
                    isDark
                        ? "/default-icons/dark-theme/moon.svg"
                        : "/default-icons/light-theme/sun.svg"
                }
                alt=""
            />
        </button>
    )
}
