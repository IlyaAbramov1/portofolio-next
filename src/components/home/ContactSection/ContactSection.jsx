import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"

import styles from "./ContactSection.module.css"

export default function AboutSection({ copy }) {
    return (
        <section id="aboutMe" className="innerContainer">
            <BlockHeader 
                iconName="contacts"
                title={copy.title}
            />
            <Reveal>
                <p className="text">{copy.intro}</p>
            </Reveal>
            <Reveal>    
                <div className={styles.rowSection}>
                    <p className="subText">{copy.emailLabel}</p>
                    <MorphText>
                        <a className="link" href="mailto:ilyaabramov29@gmail.com" target="_blank">ilyaabramov29@gmail.com↗</a>
                    </MorphText>
                </div>
            </Reveal>
            <Reveal>
                <div className={styles.rowSection}>
                    <p className="subText">{copy.telegramLabel}</p>
                    <MorphText>
                        <a className="link" href="https://t.me/abramovdesiqn" target="_blank">{copy.telegramHandle}</a>
                    </MorphText>
                </div>
            </Reveal>
        </section>
    )
}
