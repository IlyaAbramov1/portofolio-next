import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import MorphText from "@/components/ui/MorphText/MorphText";

import styles from "./WorkSection.module.css"
import Reveal from "@/components/ui/Reveal/Reveal";

export default function WorkSection({ copy }) {
    return (
        <section id="work" className="innerContainer">
            <BlockHeader 
                iconName="work"
                title={copy.title}
                subtitle={copy.cvLabel}
                subtitleLink="/CV_Ilya_Abramov.pdf"
                subtitleDownloadFile="CV_Ilya_Abramov.pdf"
            />
            {copy.items.map((item) => (
                <Reveal key={item.id}>
                    <div className={styles.workItem}>
                        <div className={styles.workItemText}>{item.workPlace}</div>
                        <div className={styles.workItemSubText}>{item.workPeriod}</div>
                    </div>
                </Reveal>
            ))}
        </section>
    )
}
