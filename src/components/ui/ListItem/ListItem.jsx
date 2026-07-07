"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import MorphText from "../MorphText/MorphText";
import ProjectTag from "../ProjectTag/ProjectTag";
import { withAssetVersion } from "@/lib/assets";
import { getProjectTags } from "@/lib/project-tags";

import styles from "./ListItem.module.css";

const EXTERNAL_HREF_RE = /^(https?:|mailto:|tel:)/;

function ItemLink({ children, className, href, onMouseEnter, onMouseLeave }) {
    if (!href) {
        return (
            <div
                className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </div>
        );
    }

    if (EXTERNAL_HREF_RE.test(href)) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Link>
    );
}

function Medal({ label }) {
    return (
        <div className={styles.medalWrap} aria-hidden="true">
            {label ? <span className={styles.medalBadge}>{label}</span> : null}
            <span className={styles.coin} />
        </div>
    );
}

function ProjectTags({ tags }) {
    if (!tags || tags.length === 0) return null;

    return (
        <div className={styles.projectTags}>
            {tags.map((tag) => (
                <ProjectTag key={tag.id} {...tag} />
            ))}
        </div>
    );
}

function ItemText({ cover, description, isHover, isNew, tags, title, year }) {
    if (cover) {
        return (
            <div className={styles.listItemText}>
                <div className={styles.listItemTitleRow}>
                    <div className={styles.listItemTitle}>{title}</div>
                    {year ? <div className={styles.listItemYear}>{year}</div> : null}
                </div>
                <ProjectTags tags={tags} />
                {description ? <div className={styles.listItemSubText}>{description}</div> : null}
            </div>
        );
    }

    return (
        <div className={styles.listItemText}>
            <div className={styles.listItemTitleRow}>
                <div className={styles.listItemTitle}>{title}</div>
                {year ? <div className={styles.listItemYear}>{year}</div> : null}
            </div>
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
                    <MorphText active={isHover}>
                        <div className={styles.listItemSubText}>{description}</div>
                    </MorphText>
                )}
            </div>
        </div>
    );
}

export default function ListItem({
    cover,
    title,
    description,
    isNew = false,
    locale = "ru",
    tagIds = [],
    year,
    hasMedal = false,
    medalLabel = "",
    href,
}) {
    const [isHover, setIsHover] = useState(false);
    const resolvedTagIds = [...new Set(cover && isNew ? ["new", ...tagIds] : tagIds)];
    const tags = getProjectTags(resolvedTagIds, locale);
    const hoverHandlers = {
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false),
    };
    const listItemContainerClassName = `${styles.listItemContainer} ${
        cover ? styles.listItemContainerWithCover : ""
    }`.trim();

    const textContent = (
        <ItemText
            cover={cover}
            description={description}
            isHover={isHover}
            isNew={isNew}
            tags={tags}
            title={title}
            year={year}
        />
    );

    const content = cover ? (
        <>
            <div className={styles.listItemCoverWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.listItemCover} src={withAssetVersion(cover)} alt="" />
                {hasMedal ? <Medal label={medalLabel} /> : null}
            </div>
            <div className={styles.listItemContent}>
                <div className={styles.listMedalAndText}>
                    {textContent}
                </div>
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
            <ItemLink
                href={href}
                className={listItemContainerClassName}
                {...hoverHandlers}
            >
                {content}
            </ItemLink>
        </Reveal>
    );
}
