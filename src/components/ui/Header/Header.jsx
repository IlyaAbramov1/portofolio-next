"use client";

import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle"
import Reveal from "@/components/ui/Reveal/Reveal";
import { localizeHref } from "@/i18n/utils";

import styles from "./Header.module.css";
import MorphText from "../MorphText/MorphText";

function LinksRow({ label, links, locale }) {
    if (!label && (!links || links.length === 0)) return null;

    return (
        <Reveal>
            <div className={styles.row}>
                {label ? <span className="text">{label}</span> : null}
                {links && links.length > 0 ? (
                    <nav className={styles.links} aria-label={label || "Навигация"}>
                        {links.map((l) => (
                            <MorphText key={`${l.href}-${l.label}`}>
                                <a
                                    className="link"
                                    href={localizeHref(locale, l.href)}
                                    target={l.external ? "_blank" : undefined}
                                    rel={l.external ? "noreferrer" : undefined}
                                >
                                    {l.label}
                                </a>
                            </MorphText>
                        ))}
                    </nav>
                ) : null}
            </div>
        </Reveal>
    )
}

export default function Header({
    locale = "ru",
    logoAriaLabel = "На главную",
    primaryLabel,
    primaryLinks,
    secondaryLabel,
    secondaryLinks,
    bottomSlot
}) {
    return (
        <header className={styles.header}>
            <Reveal>
                <div className={styles.topRow}>
                    <div className={styles.logo}>
                        <a href={localizeHref(locale, "/")} aria-label={logoAriaLabel}>
                            <img src="/main-logo.svg" alt="" />
                        </a>
                    </div>
                    <ThemeToggle locale={locale} />
                </div>
            </Reveal>

            <LinksRow label={primaryLabel} links={primaryLinks} locale={locale}/>

            {bottomSlot ? 
                <Reveal>
                    <div className={styles.bottom}>
                        {bottomSlot}
                    </div>
                </Reveal> 
                : null
            }
            
            <LinksRow label={secondaryLabel} links={secondaryLinks} locale={locale}/>
        </header>
    )
}
