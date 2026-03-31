"use client";

import styles from "./Prose.module.css";
import { withAssetVersion } from "@/lib/assets";

export default function ImageAndSubtitle({ src, alt = "", children }) {
    return (
        <div className={styles.ImageAndSubtitle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withAssetVersion(src)} alt={alt} loading="lazy" />
            <div className={styles.ImageAndSubtitleCaption}>{children}</div>
        </div>
    );
}
