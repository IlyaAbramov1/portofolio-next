import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import MorphText from "../MorphText/MorphText";

import styles from "./ListItem.module.css";

export default function ListItem({
    cover,
    title,
    description,
    isNew = false,
    linkText,
    href
}) {
    const isExternal =
        typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);

    return (
        <Reveal>
            {href ? (
                isExternal ? (
                    <a
                        href={href}
                        className={styles.listItemContainer}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {cover ? (
                            <img className={styles.listItemCover} src={cover} alt="" />
                        ) : null}
                        <div className={styles.listItemContent}>
                            <div className={styles.listItemText}>
                                <div className={styles.listItemTitle}>{title}</div>
                                <div className={styles.listItemDescription}>
                                    {isNew ? <div className="hashtagNew">Новое</div> : null}
                                    <div className={styles.listItemSubText}>{description}</div>
                                </div>
                            </div>
                            {linkText ? (
                                <span className={styles.linkButton}>{linkText}</span>
                            ) : null}
                        </div>
                    </a>
            ) : (
                    <Link href={href} className={styles.listItemContainer}>
                        {cover ? (
                            <img className={styles.listItemCover} src={cover} alt="" />
                        ) : null}
                        <div className={styles.listItemContent}>
                            <div className={styles.listItemText}>
                                <div className={styles.listItemTitle}>{title}</div>
                                <div className={styles.listItemDescription}>
                                    {isNew ? <div className="hashtagNew">Новое</div> : null}
                                    <div className={styles.listItemSubText}>{description}</div>
                                </div>
                            </div>
                            {linkText ? (
                                <span className={styles.linkButton}>{linkText}</span>
                            ) : null}
                        </div>
                    </Link>
                )
            ) : (
                <div className={styles.listItemContainer}>
                    {cover ? (
                        <img className={styles.listItemCover} src={cover} alt="" />
                    ) : null}
                    <div className={styles.listItemContent}>
                        <div className={styles.listItemText}>
                            <div className={styles.listItemTitle}>{title}</div>
                            <div className={styles.listItemDescription}>
                                {isNew ? <div className="hashtagNew">Новое</div> : null}
                                <div className={styles.listItemSubText}>{description}</div>
                            </div>
                        </div>
                        {linkText ? <span className={styles.linkButton}>{linkText}</span> : null}
                    </div>
                </div>
            )}
        </Reveal>
    )
}
