 "use client";

import { useState } from "react";
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

    const [isHover, setIsHover] = useState(false);
    const hoverHandlers = {
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false),
    };

    const content = (
        <>
            {cover ? (
                <div className={styles.listItemCoverWrapper}>
                    <img className={styles.listItemCover} src={cover} alt="" />
                </div>
            ) : null}
            <div className={styles.listItemContent}>
                <div className={styles.listItemText}>
                    <MorphText active={isHover}>
                        <div className={styles.listItemTitle}>{title}</div>
                    </MorphText>
                    <div className={styles.listItemDescription}>
                        {isNew ? (
                            <MorphText active={isHover}>
                                <div className="hashtagNew">Новое</div>
                            </MorphText>
                        ) : null}
                        <MorphText active={isHover}>
                            <div className={styles.listItemSubText}>{description}</div>
                        </MorphText>
                    </div>
                </div>
                {linkText ? (
                    <MorphText active={isHover}>
                        <span className={styles.linkButton}>{linkText}</span>
                    </MorphText>
                ) : null}
            </div>
        </>
    );

    return (
        <Reveal>
            {href ? (
                isExternal ? (
                    <a
                        href={href}
                        className={styles.listItemContainer}
                        target="_blank"
                        rel="noreferrer"
                        {...hoverHandlers}
                    >
                        {content}
                    </a>
                ) : (
                    <Link
                        href={href}
                        className={styles.listItemContainer}
                        {...hoverHandlers}
                    >
                        {content}
                    </Link>
                )
            ) : (
                <div className={styles.listItemContainer} {...hoverHandlers}>
                    {content}
                </div>
            )}
        </Reveal>
    )
}
