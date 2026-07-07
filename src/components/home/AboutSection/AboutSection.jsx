import BlockHeader from "@/components/ui/BlockHeader/BlockHeader"
import Reveal from "@/components/ui/Reveal/Reveal"
import MorphText from "@/components/ui/MorphText/MorphText"
import { localizeHref } from "@/i18n/utils";
import { SECTION_IDS, SITE_LINKS } from "@/lib/site";

import styles from "./AboutSection.module.css";

function MobileLinks({ links, linksLabel, locale }) {
    if (!links || links.length === 0) return null;

    return (
        <Reveal>
            <nav className={styles.mobileLinks} aria-label={linksLabel || "Контакты"}>
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

export default function AboutSection({ copy, links, linksLabel, locale }) {
    return (
        <section id={SECTION_IDS.about} className="innerContainer">
            <BlockHeader title={copy.title} iconName="about_me" />
            <Reveal>
                <p className="text">{copy.intro}</p>
            </Reveal>
            <Reveal>
                <p className="text">
                    {copy.currentPrefix}
                    <MorphText>
                        <a href={SITE_LINKS.sirena} className="link" target="_blank" rel="noreferrer">
                            {copy.currentStudio}
                        </a>
                    </MorphText>
                    {copy.currentMiddle}
                    <MorphText>
                        <a href={SITE_LINKS.sports} className="link" target="_blank" rel="noreferrer">
                            {copy.currentCompany}
                        </a>
                    </MorphText>
                    {copy.currentAfterCompany}
                    <MorphText>
                        <a href={SITE_LINKS.tomat} className="link" target="_blank" rel="noreferrer">
                            {copy.pastAgency}
                        </a>
                    </MorphText>
                    {copy.pastMiddle}
                    <MorphText>
                        <a href={SITE_LINKS.dodo} className="link" target="_blank" rel="noreferrer">
                            {copy.pastBrand}
                        </a>
                    </MorphText>
                    {copy.pastSuffix}
                </p>
            </Reveal>
            <Reveal>
                <p className="text">{copy.passion}</p>
            </Reveal>
            <Reveal>
                <p className="text">{copy.goal}</p>
            </Reveal>
            <Reveal>
                <p className="text">{copy.final}</p>
            </Reveal>
            <MobileLinks links={links} linksLabel={linksLabel} locale={locale} />
        </section>
    )
}
