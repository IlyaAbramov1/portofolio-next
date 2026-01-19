"use client";

import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle"
import Reveal from "@/components/ui/Reveal/Reveal";

import styles from "./Header.module.css";
import MorphText from "../MorphText/MorphText";

function LinksRow({ label, links }) {
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
                                    href={l.href}
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
                        <a href="`/`" aria-label="Логотип">
                            <img src="/main-logo.svg" alt="" />
                        </a>
                    </div>
                    <ThemeToggle />
                </div>
            </Reveal>

            <LinksRow label={primaryLabel} links={primaryLinks}/>

            {bottomSlot ? 
                <Reveal>
                    <div className={styles.bottom}>
                        {bottomSlot}
                    </div>
                </Reveal> 
                : null
            }
            
            <LinksRow label={secondaryLabel} links={secondaryLinks}/>
        </header>
    )
}
