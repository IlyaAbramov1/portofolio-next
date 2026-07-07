"use client";

import { useSyncExternalStore } from "react";

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

export default function useIsDarkTheme() {
    return useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot);
}
