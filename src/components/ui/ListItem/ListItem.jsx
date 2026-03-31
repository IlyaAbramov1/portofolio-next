 "use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import MorphText from "../MorphText/MorphText";
import { withAssetVersion } from "@/lib/assets";

import styles from "./ListItem.module.css";

export default function ListItem({
    cover,
    title,
    description,
    isNew = false,
    hasMedal = false,
    medalLabel = "",
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
    const listItemContainerClassName = `${styles.listItemContainer} ${
        cover ? styles.listItemContainerWithCover : ""
    }`.trim();

    const textClassName = cover
        ? styles.listItemTextWithCover
        : styles.listItemTextWithoutCover;

    const textContent = (
        <div className={textClassName}>
            <MorphText active={isHover}>
                <div className={styles.listItemTitleRow}>
                    <div className={styles.listItemTitle}>{title}</div>
                </div>
            </MorphText>
            <div className={styles.listItemDescription}>
                {isNew ? (
                    <MorphText active={isHover}>
                        <div className="hashtagNew">Новое</div>
                    </MorphText>
                ) : null}
                {cover ? (
                    <MorphText active={isHover}>
                        <div className={styles.listItemSubText}>{description}</div>
                    </MorphText>
                ) : (
                    <div>
                        <div className={styles.listItemSubText}>{description}</div>
                    </div>
                )}
            </div>
        </div>
    );

    const content = cover ? (
        <>
            <div className={styles.listItemContent}>
                <div className={styles.listMedalAndText}>
                    {textContent}
                    {hasMedal ? (
                        <div className={styles.medalWrap} aria-hidden="true">
                            {medalLabel ? (
                                <span className={styles.medalBadge}>{medalLabel}</span>
                            ) : null}
                            <span className={styles.coin} />
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={styles.listItemCoverWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.listItemCover} src={withAssetVersion(cover)} alt="" />
            </div>
        </>
    ) : (
        <div className={styles.listItemContentArticle}>
            <div className={styles.listMedalAndText}>
                {textContent}
            </div>
        </div>
    );

    return (
        <Reveal>
            {href ? (
                isExternal ? (
                    <a
                        href={href}
                        className={listItemContainerClassName}
                        target="_blank"
                        rel="noreferrer"
                        {...hoverHandlers}
                    >
                        {content}
                    </a>
                ) : (
                    <Link
                        href={href}
                        className={listItemContainerClassName}
                        {...hoverHandlers}
                    >
                        {content}
                    </Link>
                )
            ) : (
                <div className={listItemContainerClassName} {...hoverHandlers}>
                    {content}
                </div>
            )}
        </Reveal>
    )
}
