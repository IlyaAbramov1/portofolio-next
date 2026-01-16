"use client";

import Reveal from "@/components/ui/Reveal/Reveal.jsx";
import styles from "./BlockHeader.module.css"

import { useState, useEffect } from "react"

export default function BlockHeader({
    iconName,
    title,
    subtitle,
    subtitleLink,
    subtitleDownloadFile
}) {
    const [ isDark, setIsDark ] = useState(false);
    

    useEffect(() => {
        const update = () => {
            setIsDark(document.body.classList.contains("dark-theme"));
        };

        update(); // начальная синхронизация

        const observer = new MutationObserver(update);
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, [])

    const iconPath = `/default-icons/${isDark ? "dark-theme" : "light-theme"}/${iconName}.svg`

    return (
        <Reveal>
            <div className={styles.blockHeader}>
                <div className={styles.blockHeaderInfo}>
                    <div className={styles.blockHeaderIcon}>
                        <img src={iconPath} alt="" />
                    </div>
                    <h2 className="h2">{title}</h2>
                </div>
                {subtitle ? (<a href={subtitleLink} className="link" download={subtitleDownloadFile}>{subtitle}</a>): null }
            </div>
        </Reveal>
    )
}