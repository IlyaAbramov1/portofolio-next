import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"

import styles from "./ContactSection.module.css"

export default function AboutSection() {
    return (
        <section id="aboutMe" className="innerContainer">
            <BlockHeader 
                iconName="contacts"
                title="Связь"
            />
            <Reveal>
                <p className="text">Меня цепляют проекты с «зачем»: искусство, наука, спорт, предпринимательство. Открыт к коллаборациям и проектной работе, где можно делать что-то живое и осмысленное.</p>
            </Reveal>
            <Reveal>    
                <div className={styles.rowSection}>
                    <p className="subText">Email</p>
                    <MorphText>
                        <a className="link" href="mailto:ilyaabramov29@gmail.com↗" target="_blank">ilyaabramov29@gmail.com↗</a>
                    </MorphText>
                </div>
            </Reveal>
            <Reveal>
                <div className={styles.rowSection}>
                    <p className="subText">Telegram</p>
                    <MorphText>
                        <a className="link" href="https://t.me/abramovdesiqn" target="_blank">@abramovdesiqn↗</a>
                    </MorphText>
                </div>
            </Reveal>
        </section>
    )
}
