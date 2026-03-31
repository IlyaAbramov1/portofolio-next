import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"
import { SECTION_IDS, SITE_LINKS } from "@/lib/site";

import styles from "./ContactSection.module.css"

export default function ContactSection({ copy }) {
    return (
        <section id={SECTION_IDS.contact} className="innerContainer">
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
                        <a className="link" href={SITE_LINKS.email}>ilyaabramov29@gmail.com↗</a>
                    </MorphText>
                </div>
            </Reveal>
            <Reveal>
                <div className={styles.rowSection}>
                    <p className="subText">{copy.telegramLabel}</p>
                    <MorphText>
                        <a className="link" href={SITE_LINKS.telegram} target="_blank" rel="noreferrer">{copy.telegramHandle}</a>
                    </MorphText>
                </div>
            </Reveal>
        </section>
    )
}
