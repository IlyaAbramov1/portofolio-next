"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Reveal from "@/components/ui/Reveal/Reveal";
import MorphText from "@/components/ui/MorphText/MorphText";
import { localizeHref } from "@/i18n/utils";
import { SITE_LINKS } from "@/lib/site";

import styles from "./HomeSidebar.module.css";

const BLUE_BACKGROUND_END = 0.62;
const MOBILE_MEDIA_QUERY = "(max-width: 900px)";

const HEADER_COLORS = {
    blue: {
        "--home-sidebar-logo-color": "white",
        "--home-sidebar-title-color": "white",
        "--home-sidebar-subtitle-color": "rgb(255 255 255 / 40%)",
        "--home-sidebar-link-color": "rgb(255 255 255 / 40%)",
        "--home-sidebar-link-hover-color": "white",
    },
    light: {
        "--home-sidebar-logo-color": "var(--text-color)",
        "--home-sidebar-title-color": "var(--text-color)",
        "--home-sidebar-subtitle-color": "var(--thirdly-text-color)",
        "--home-sidebar-link-color": "var(--thirdly-text-color)",
        "--home-sidebar-link-hover-color": "var(--accent-color)",
    },
};

function useHeaderContrast() {
    const headerRef = useRef(null);
    const [isOnBlue, setIsOnBlue] = useState(true);

    useEffect(() => {
        let frame = 0;

        const updateContrast = () => {
            frame = 0;

            const header = headerRef.current;
            if (!header) return;

            const rect = header.getBoundingClientRect();
            const mobileQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
            const sampleOffset = mobileQuery.matches ? 0.25 : 0.5;
            const sampleY = window.scrollY + rect.top + rect.height * sampleOffset;
            const canvasHeight = Math.max(window.innerHeight, 1);
            const position = sampleY / canvasHeight;

            setIsOnBlue(position < BLUE_BACKGROUND_END);
        };

        const scheduleUpdate = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(updateContrast);
        };

        updateContrast();
        const mobileQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        mobileQuery.addEventListener("change", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            mobileQuery.removeEventListener("change", scheduleUpdate);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return {
        headerRef,
        isOnBlue,
    };
}

function SidebarLinks({ ariaLabel, links, locale }) {
    if (!links || links.length === 0) return null;

    return (
        <Reveal>
            <nav className={styles.links} aria-label={ariaLabel || "Контакты"}>
                {links.map((link) => (
                    <MorphText key={`${link.href}-${link.label}`}>
                        <a
                            className="link"
                            href={localizeHref(locale, link.href)}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer" : undefined}
                        >
                            {link.label}
                        </a>
                    </MorphText>
                ))}
            </nav>
        </Reveal>
    );
}

function SidebarHeader({
    contactLabel,
    identityTitle,
    identitySubtitle,
    locale,
    logoAriaLabel,
    links,
    linksLabel,
}) {
    const { headerRef, isOnBlue } = useHeaderContrast();
    const colorMode = isOnBlue ? "blue" : "light";
    const contactText = contactLabel?.replace("↗", "").trim();

    return (
        <header
            ref={headerRef}
            className={styles.header}
            data-color-mode={colorMode}
            style={HEADER_COLORS[colorMode]}
        >
            <Reveal>
                <a
                    href={localizeHref(locale, "/")}
                    aria-label={logoAriaLabel}
                    className={styles.logoLink}
                >
                    <span className={styles.logoMark} aria-hidden="true" />
                </a>
            </Reveal>

            <Reveal>
                <div className={styles.identity}>
                    {identityTitle ? <p className={styles.identityTitle}>{identityTitle}</p> : null}
                    {identitySubtitle ? <p className={styles.identitySubtitle}>{identitySubtitle}</p> : null}
                </div>
            </Reveal>

            <SidebarLinks ariaLabel={linksLabel} links={links} locale={locale} />

            <Reveal className={styles.mobileActionsReveal}>
                <div className={styles.mobileActions}>
                    <PrimaryButton
                        href={SITE_LINKS.email}
                        text={contactText}
                        icon="↗"
                        aria-label={contactLabel}
                        className={styles.mobileContactButton}
                    />
                    <ThemeToggle locale={locale} />
                </div>
            </Reveal>
        </header>
    );
}

function SidebarFooter({ contactLabel, locale, note }) {
    const contactText = contactLabel?.replace("↗", "").trim();

    return (
        <Reveal className={styles.footerReveal}>
            <footer className={styles.footer}>
                <div className={styles.actions}>
                    <PrimaryButton
                        href={SITE_LINKS.email}
                        text={contactText}
                        icon="↗"
                        aria-label={contactLabel}
                    />
                    <ThemeToggle locale={locale} />
                </div>
                <p className={`subText ${styles.note}`}>{note}</p>
            </footer>
        </Reveal>
    );
}

export default function HomeSidebar({
    contactLabel,
    identitySubtitle,
    identityTitle,
    links,
    linksLabel,
    locale,
    logoAriaLabel,
    note,
}) {
    return (
        <aside className={styles.sidebar}>
            <SidebarHeader
                contactLabel={contactLabel}
                identitySubtitle={identitySubtitle}
                identityTitle={identityTitle}
                links={links}
                linksLabel={linksLabel}
                locale={locale}
                logoAriaLabel={logoAriaLabel}
            />
            <SidebarFooter contactLabel={contactLabel} locale={locale} note={note} />
        </aside>
    );
}
