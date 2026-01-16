import DreamLayout from "./dream-layout.mdx";
import WhatDesignIs from "./what-desing-is.mdx";
import Copying from "./copying.mdx";
import { TEXTS_META } from "./meta";

import styles from "@/components/ui/Header/Header.module.css"

export const TEXTS = {
    "dream-layout": {
        meta: TEXTS_META["dream-layout"],
        header: {
            bottomSlot: (
                <div className={styles.bottom}>
                    <div className="h1">Макет мечты vs Реальность кода</div>
                    <div className="subText">Статья | 2025</div>
                    <div className="text">О том, как донести свой дизайн до разработки.</div>
                </div>
            ),
            secondaryLinks: [
                { label: "←На главную", href: "/", external: false }
            ]
        },
        Content: DreamLayout
    },
    "what-design-is": {
        meta: TEXTS_META["what-design-is"],
        header: {
            bottomSlot: (
                <div className={styles.bottom}>
                    <div className="h1">Что такое дизайн?</div>
                    <div className="subText">Статья | 2024</div>
                    <div className="text">Моя статья о том, как на личном профессиональном опыте я пытаюсь сформулировать, что такое дизайн и в чём его смысл. Это попытка честной рефлексии о профессии и её ценности в реальных условиях работы.</div>
                </div>
            ),
            secondaryLinks: [
                { label: "←На главную", href: "/", external: false },
            ]
        },
        Content: WhatDesignIs
    },
    "copying": {
        meta: TEXTS_META["copying"],
        header: {
            bottomSlot: (
                <div className={styles.bottom}>
                    <div className="h1">Копируй: Как работает дизайн</div>
                    <div className="subText">Перевод | 2024</div>
                    <div className="text">Перевод статьи Мэтью Штрома, выполненный мною в 2024 году. Статья фундаментальная. Рекомендую ознакомиться также с оригиналом. Отдельная благодарность за помощь Диме Уланову.</div>
                </div>
            ),
            secondaryLinks: [
                { label: "←На главную", href: "/", external: false },
                { label: "Оригинальная статья↗", href: "https://mattstromawn.com/writing/copying/", external: false }
            ]
        },
        Content: Copying
    }
}
