"use client";

import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, locales } from "@/i18n/config";
import useIsDarkTheme from "@/hooks/useIsDarkTheme";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({ locale = defaultLocale }) {
    const router = useRouter();
    const pathname = usePathname();
    const isDark = useIsDarkTheme();
    const iconTheme = isDark ? "dark-theme" : "light-theme";
    const themeIcon = isDark ? "light" : "moon";
    const localeIcon = locale === "ru" ? "en" : "ru";

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
            <SecondaryButton
                icon={`/icons/${iconTheme}/${themeIcon}.svg`}
                iconAlt=""
                onClick={handleToggleTheme}
                aria-pressed={isDark}
                aria-label="Переключить тему"
            />
            <SecondaryButton
                icon={`/icons/${iconTheme}/${localeIcon}.svg`}
                iconAlt=""
                onClick={handleToggleLocale}
                aria-label={locale === "ru" ? "Switch language to English" : "Переключить язык на русский"}
            />
        </div>
    );
}
