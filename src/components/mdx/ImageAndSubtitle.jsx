"use client";

import styles from "./Prose.module.css";

export default function ImageAndSubtitle({ src, alt = "", children }) {
    return (
        <div className={styles.ImageAndSubtitle}>
            <img src={src} alt={alt} loading="lazy" />
            <div className={styles.ImageAndSubtitleCaption}>{children}</div>
        </div>
    );
}
