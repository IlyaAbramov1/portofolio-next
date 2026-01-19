import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import MorphText from "@/components/ui/MorphText/MorphText";

import styles from "./WorkSection.module.css"
import Reveal from "@/components/ui/Reveal/Reveal";

const workItems = [
    {
    id: 1,
    workPlace: "UI дизайнер в Сирена // Спортс",
    workPeriod: "2024 — н.в.",
    },
    {
    id: 2,
    workPlace: "Коммуникационный дизайнер в ТОМАТ // Додо",
    workPeriod: "2021 — 2024",
    },
    {
    id: 3,
    workPlace: "Дизайнер-стажёр в Tactics&Practice",
    workPeriod: "2019",
    },
    {
    id: 4,
    workPlace: "Дизайнер на фрилансе",
    workPeriod: "2019 — н.в.",
    },
];


export default function WorkSection() {
    return (
        <section id="work" className="innerContainer">
            <BlockHeader 
                iconName="work"
                title="Работа"
                subtitle="Скачать CV↗"
                subtitleLink="/CV_Ilya_Abramov.pdf"
                subtitleDownloadFile="CV_Ilya_Abramov.pdf"
            />
            {workItems.map((item) => (
                <Reveal key={item.id}>
                    <div className={styles.workItem}>
                        <MorphText>
                            <div className={styles.workItemText}>{item.workPlace}</div>
                        </MorphText>
                        <MorphText>
                            <div className={styles.workItemSubText}>{item.workPeriod}</div>
                        </MorphText>
                    </div>
                </Reveal>
            ))}
        </section>
    )
}
