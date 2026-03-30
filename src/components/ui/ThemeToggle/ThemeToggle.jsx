"use client";

import { useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, locales } from "@/i18n/config";
import { withAssetVersion } from "@/lib/assets";
import styles from "./ThemeToggle.module.css";

function subscribe(onStoreChange) {
    if (typeof window === "undefined") {
        return () => {};
    }

    const handleChange = () => onStoreChange();

    window.addEventListener("storage", handleChange);
    window.addEventListener("themechange", handleChange);

    return () => {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener("themechange", handleChange);
    };
}

function getThemeSnapshot() {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return false;
    }

    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "dark" || document.body.classList.contains("dark-theme");
}

function getServerThemeSnapshot() {
    return false;
}

export default function ThemeToggle({ locale = defaultLocale }) {
    const router = useRouter();
    const pathname = usePathname();
    const isDark = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot);

    const handleToggleTheme = () => {
        const nextIsDark = !isDark;

        document.body.classList.toggle("dark-theme", nextIsDark);
        window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
        window.dispatchEvent(new Event("themechange"));
    };

    const handleToggleLocale = () => {
        const nextLocale = locale === "ru" ? "en" : "ru";
        const path = pathname || "/";
        const segments = path.split("/").filter(Boolean);
        const contentSegments = locales.includes(segments[0]) ? segments.slice(1) : segments;
        const nextPath = `/${nextLocale}${contentSegments.length ? `/${contentSegments.join("/")}` : ""}/`;

        router.push(nextPath);
    };

    return (
        <div className={styles.toggleGroup}>
            <button
                type="button"
                className={styles.langToggle}
                onClick={handleToggleLocale}
                aria-label={locale === "ru" ? "Switch language to English" : "Переключить язык на русский"}
            >
                <span className={styles.langValue}>{locale.toUpperCase()}</span>
            </button>
            <button
                type="button"
                className={styles.themeToggle}
                onClick={handleToggleTheme}
                aria-pressed={isDark}
                aria-label="Переключить тему"
            >
                <img
                    src={withAssetVersion(
                        isDark
                            ? "/default-icons/dark-theme/moon.svg"
                            : "/default-icons/light-theme/sun.svg"
                    )}
                    alt=""
                />
            </button>
        </div>
    );
}
