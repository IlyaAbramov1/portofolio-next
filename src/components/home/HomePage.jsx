import styles from "./HomePage.module.css";

import AboutSection from "./AboutSection/AboutSection";
import WorkSection from "./WorkSection/WorkSection";
import DesignLibrarySection from "./DesignLibrarySection/DesignLibrarySection";
import ClientsSection from "./ClientsSection/ClientsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import TextsSection from "./TextsSection/TextsSection";
import ContactSection from "./ContactSection/ContactSection";
import HomeBackground from "./HomeBackground/HomeBackground";
import CharacterSequence from "./CharacterSequence/CharacterSequence";
import HomeSidebar from "./HomeSidebar/HomeSidebar";

function SectionDivider() {
    return <hr className={styles.sectionDivider} />;
}

export default function HomePage({ locale, dictionary, projects }) {
    const { home, footer } = dictionary;

    return (
        <div className={`${styles.pageShell} homePageShell`}>
            <HomeBackground />
            <HomeSidebar
                contactLabel={home.sidebar.contactCta}
                identitySubtitle={home.header.identitySubtitle}
                identityTitle={home.header.identityTitle}
                links={home.header.secondaryLinks}
                linksLabel={home.header.secondaryLabel}
                locale={locale}
                logoAriaLabel={home.header.logoAriaLabel}
                note={footer.note}
            />
            <main className={styles.mainContent}>
                <div className={styles.contentStack}>
                    <CharacterSequence />
                    <AboutSection
                        copy={home.about}
                        links={home.header.secondaryLinks}
                        linksLabel={home.header.secondaryLabel}
                        locale={locale}
                    />
                    <SectionDivider />
                    <ClientsSection copy={home.clients} />
                    <SectionDivider />
                    <WorkSection copy={home.work} />
                    <DesignLibrarySection copy={home.designLibrary} />
                    <ProjectsSection locale={locale} copy={home.projects} projects={projects} />
                    <SectionDivider />
                    <TextsSection locale={locale} copy={home.texts} />
                    <SectionDivider />
                    <ContactSection copy={home.contact} />
                </div>
            </main>
            <footer className={styles.mobileFooter}>
                <p className="subText">{footer.note}</p>
            </footer>
            <HomeBackground placement="bottom" />
        </div>
    );
}
