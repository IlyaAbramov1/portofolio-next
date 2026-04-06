import styles from "./HomePage.module.css";

import Header from "@/components/ui/Header/Header"
import AboutSection from "./AboutSection/AboutSection";
import WorkSection from "./WorkSection/WorkSection";
import DesignLibrarySection from "./DesignLibrarySection/DesignLibrarySection";
import ClientsSection from "./ClientsSection/ClientsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import TextsSection from "./TextsSection/TextsSection";
import ContactSection from "./ContactSection/ContactSection";
import FollowSection from "./FollowSection/FollowSection";
import Footer from "@/components/ui/Footer/Footer"

export default function HomePage({ locale, dictionary, projects }) {
    const { home, footer } = dictionary;

    return (
        <div>
            <Header
                locale={locale}
                logoAriaLabel={home.header.logoAriaLabel}
                primaryLabel={home.header.primaryLabel}
                primaryLinks={home.header.primaryLinks}
                secondaryLabel={home.header.secondaryLabel}
                secondaryLinks={home.header.secondaryLinks}
            />
            <AboutSection copy={home.about} />
            <FollowSection ctaLabel={home.follow.cta} />
            <WorkSection copy={home.work} />
            <DesignLibrarySection copy={home.designLibrary} />
            <ClientsSection copy={home.clients} />
            <ProjectsSection locale={locale} copy={home.projects} projects={projects} />
            <TextsSection locale={locale} copy={home.texts} />
            <ContactSection copy={home.contact} />
            <Footer note={footer.note} toTopLabel={footer.toTop} />
        </div>
    )
}
