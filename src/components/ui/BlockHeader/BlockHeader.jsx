"use client";

import Reveal from "@/components/ui/Reveal/Reveal.jsx";
import styles from "./BlockHeader.module.css";

import MorphText from "../MorphText/MorphText";

export default function BlockHeader({
    title,
    subtitle,
    subtitleLink,
    subtitleDownloadFile
}) {
    return (
        <Reveal>
            <div className={styles.blockHeader}>
                <div className={styles.blockHeaderInfo}>
                    <h2 className="h2">{title}</h2>
                </div>
                {subtitle ? (
                    <MorphText>
                        <a href={subtitleLink} className="link" download={subtitleDownloadFile}>{subtitle}</a>
                    </MorphText>
                ) : null}
            </div>
        </Reveal>
    )
}
