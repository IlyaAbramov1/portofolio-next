"use client"

import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "../MorphText/MorphText"

import styles from "./Footer.module.css"

export default function Footer({
    note = "Designed and developed by Ilya Abramov. Last update March 26",
    toTopLabel = "Перейти наверх↑",
}) {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer className="innerContainer">
            <Reveal>
                    <div className={styles.footerContainer}>
                        <p className="subText">{note}</p>
                        <MorphText>
                            <button type="button" onClick={handleClick} className="link">{toTopLabel}</button>
                        </MorphText>
                    </div>
            </Reveal>   
        </footer>    
    )
}
