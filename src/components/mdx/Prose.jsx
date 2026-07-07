"use client";

import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import BlockHeader from "@/components/ui/BlockHeader/BlockHeader";
import MorphText from "@/components/ui/MorphText/MorphText";
import Reveal from "@/components/ui/Reveal/Reveal";
import { localizeHref } from "@/i18n/utils";

import styles from "./Prose.module.css";

function ArticleNav({
    className = "",
    items = [],
}) {
    if (items.length === 0) return null;

    const classNames = `${styles.articleNav} ${className}`.trim();

    return (
        <nav className={classNames} aria-label="Оглавление статьи">
            <ol className={styles.articleToc}>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={item.desktop === false ? styles.mobileOnlyTocItem : undefined}
                    >
                        <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

function InternalBackLink({ href = "/", label, locale }) {
    if (!label) return null;

    return (
        <MorphText>
            <a className={styles.internalBackLink} href={localizeHref(locale, href)}>
                {label}
            </a>
        </MorphText>
    );
}

function ArticleHeader({ description, subtitle, title }) {
    if (!title && !subtitle && !description) return null;

    return (
        <header className={styles.articleHeader}>
            <div className={styles.articleHeaderTop}>
                {title ? <h1 className={`h2 ${styles.articleTitle}`}>{title}</h1> : null}
                {subtitle ? <p className={`subText ${styles.articleMeta}`}>{subtitle}</p> : null}
            </div>
            {description ? <p className={`text ${styles.articleDescription}`}>{description}</p> : null}
        </header>
    );
}

function ArticleFooter({ locale, note }) {
    if (!note) return null;

    return (
        <footer className={styles.articleFooter}>
            <div className={styles.articleFooterActions}>
                <a
                    className={styles.articleFooterLogo}
                    href={localizeHref(locale, "/")}
                    aria-label="На главную"
                />
                <ThemeToggle locale={locale} />
            </div>
            <p className={`subText ${styles.articleFooterNote}`}>{note}</p>
        </footer>
    );
}

export function InternalSidebarIntro({
    count,
    description,
    iconName,
    title,
}) {
    if (!title && !description) return null;

    return (
        <div className={styles.sidebarIntro}>
            {title ? (
                <BlockHeader
                    iconName={iconName}
                    title={(
                        <>
                            {title}
                            {count ? <sup>{count}</sup> : null}
                        </>
                    )}
                />
            ) : null}
            {description ? (
                <Reveal>
                    <p className="text">{description}</p>
                </Reveal>
            ) : null}
        </div>
    );
}

function InternalSidebar({
    footerNote,
    intro,
    locale,
    navigation,
}) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                <Reveal>
                    <InternalBackLink
                        href={navigation?.backHref}
                        label={navigation?.backLabel}
                        locale={locale}
                    />
                </Reveal>
                <Reveal>
                    <ArticleNav
                        items={navigation?.items}
                    />
                </Reveal>
                {intro || null}
            </div>
            <Reveal>
                <ArticleFooter locale={locale} note={footerNote} />
            </Reveal>
        </aside>
    );
}

function MobileArticleHeader({ locale, logoAriaLabel }) {
    return (
        <header className={styles.mobileHeader}>
            <a
                className={styles.mobileLogo}
                href={localizeHref(locale, "/")}
                aria-label={logoAriaLabel || "На главную"}
            />
            <ThemeToggle locale={locale} />
        </header>
    );
}

export default function Prose({ 
    article,
    headerProps,
    footerProps,
    navigation,
    sidebarIntro,
    variant = "article",
    children
}) {
    const locale = headerProps?.locale || "ru";
    const articleSubtitle = article?.subtitle || [article?.kind, article?.year].filter(Boolean).join(" | ");

    return (
        <div className={`${styles.prose} internalPageShell`} data-prose-variant={variant}>
            <InternalSidebar
                footerNote={footerProps?.note}
                intro={sidebarIntro}
                locale={locale}
                navigation={navigation}
            />
            <Reveal>
                <MobileArticleHeader
                    locale={locale}
                    logoAriaLabel={headerProps?.logoAriaLabel}
                />
            </Reveal>
            {navigation?.backLabel ? (
                <Reveal className={styles.mobileBackLink}>
                    <InternalBackLink
                        href={navigation?.backHref}
                        label={navigation?.backLabel}
                        locale={locale}
                    />
                </Reveal>
            ) : null}
            {navigation?.items?.length ? (
                <Reveal>
                    <ArticleNav
                        className={styles.mobileArticleNav}
                        items={navigation?.items}
                    />
                </Reveal>
            ) : null}
            {sidebarIntro ? (
                <div className={styles.mobileSidebarIntro}>
                    {sidebarIntro}
                </div>
            ) : null}
            <main className={styles.mainContent}>
                <section className={`innerContainer ${styles.contentSection}`}>
                    <Reveal>
                        <ArticleHeader
                            description={article?.description}
                            subtitle={articleSubtitle}
                            title={article?.title}
                        />
                    </Reveal>
                    <div className={styles.articleContent}>
                        {children}
                    </div>
                </section>
            </main>
        </div>
    );
}
