"use client";

import { withAssetVersion } from "@/lib/assets";
import useIsDarkTheme from "@/hooks/useIsDarkTheme";

import styles from "./ProjectTag.module.css";

export default function ProjectTag({ icon, label, variant = "accent" }) {
    const isDark = useIsDarkTheme();
    const iconTheme = isDark ? "dark-theme" : "light-theme";
    const iconSrc = icon?.replace("/icons/light-theme/", `/icons/${iconTheme}/`);

    return (
        <span className={`${styles.tag} ${styles[variant] || styles.accent}`}>
            {iconSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={withAssetVersion(iconSrc)} alt="" className={styles.icon} />
            ) : null}
            <span className={styles.label}>{label}</span>
        </span>
    );
}
