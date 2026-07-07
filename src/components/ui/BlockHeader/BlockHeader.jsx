"use client";

import AnimatedSvgIcon from "@/components/ui/AnimatedSvgIcon/AnimatedSvgIcon";
import Reveal from "@/components/ui/Reveal/Reveal.jsx";
import useIsDarkTheme from "@/hooks/useIsDarkTheme";

import MorphText from "../MorphText/MorphText";
import styles from "./BlockHeader.module.css";

export default function BlockHeader({
    title,
    iconName,
    subtitle,
    subtitleLink,
    subtitleDownloadFile,
}) {
    const isDark = useIsDarkTheme();
    const iconTheme = isDark ? "dark-theme" : "light-theme";
    const themedIconName = isDark && iconName === "clients" ? "clients-1" : iconName;
    const iconSrc = themedIconName ? `/icons/${iconTheme}/${themedIconName}.svg` : null;

    return (
        <Reveal>
            <div className={styles.blockHeader}>
                <div className={styles.blockHeaderInfo}>
                    {iconSrc ? (
                        <AnimatedSvgIcon
                            src={iconSrc}
                            size={20}
                            className={styles.blockHeaderIcon}
                        />
                    ) : null}
                    <h2 className="h2">{title}</h2>
                </div>
                {subtitle ? (
                    <MorphText>
                        <a href={subtitleLink} className="link" download={subtitleDownloadFile}>{subtitle}</a>
                    </MorphText>
                ) : null}
            </div>
        </Reveal>
    );
}
