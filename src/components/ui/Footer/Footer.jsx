"use client"

import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "../MorphText/MorphText"

import styles from "./Footer.module.css"

export default function Footer({
    note,
    toTopLabel = "Перейти наверх↑",
    variant = "default",
}) {
    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <footer className={variant === "sidebar" ? styles.sidebarFooter : "innerContainer"}>
            <Reveal>
                <div className={styles.footerContainer}>
                    {note ? <p className="subText">{note}</p> : null}
                    <MorphText>
                        <button type="button" onClick={handleClick} className="link">{toTopLabel}</button>
                    </MorphText>
                </div>
            </Reveal>
        </footer>
    )
}
