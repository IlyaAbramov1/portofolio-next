import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import styles from "./WorkSection.module.css"
import Reveal from "@/components/ui/Reveal/Reveal";
import { SECTION_IDS, STATIC_FILES } from "@/lib/site";

export default function WorkSection({ copy }) {
    return (
        <section id={SECTION_IDS.work} className="innerContainer">
            <BlockHeader 
                iconName="work"
                title={copy.title}
                subtitle={copy.cvLabel}
                subtitleLink={STATIC_FILES.cv}
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
