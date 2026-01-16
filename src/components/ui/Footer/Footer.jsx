"use client"

import Reveal from "@/components/ui/Reveal/Reveal"
import styles from "./Footer.module.css"

export default function AboutSection() {
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
                        <p className="subText">Designed and developed by Ilya Abramov. Last update Jan 25</p>
                        <button type="button" onClick={handleClick} className="link">Наверх↑</button>
                    </div>
            </Reveal>   
        </footer>    
    )
}