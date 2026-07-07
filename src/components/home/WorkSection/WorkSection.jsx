import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import MorphText from "@/components/ui/MorphText/MorphText";
import styles from "./WorkSection.module.css"
import Reveal from "@/components/ui/Reveal/Reveal";
import { SECTION_IDS, SITE_LINKS, STATIC_FILES } from "@/lib/site";

function WorkPlace({ item }) {
    return (
        <div className={styles.workItemText}>
            {item.workPlace}
            {item.companies?.map((company, index) => (
                <span key={company.linkKey}>
                    {index > 0 ? " // " : null}
                    <MorphText>
                        <a
                            href={SITE_LINKS[company.linkKey]}
                            className="link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {company.label}
                        </a>
                    </MorphText>
                </span>
            ))}
        </div>
    );
}

export default function WorkSection({ copy }) {
    return (
        <section id={SECTION_IDS.work} className="innerContainer">
            <BlockHeader 
                title={copy.title}
                iconName="work"
                subtitle={copy.cvLabel}
                subtitleLink={STATIC_FILES.cv}
                subtitleDownloadFile="CV_Ilya_Abramov.pdf"
            />
            {copy.items.map((item) => (
                <Reveal key={item.id}>
                    <div className={styles.workItem}>
                        <WorkPlace item={item} />
                        <div className={styles.workItemSubText}>{item.workPeriod}</div>
                    </div>
                </Reveal>
            ))}
        </section>
    )
}
