import styles from "./HomePage.module.css";

import Header from "@/components/ui/Header/Header"
import AboutSection from "./AboutSection/AboutSection";
import WorkSection from "./WorkSection/WorkSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import TextsSection from "./TextsSection/TextsSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "@/components/ui/Footer/Footer"

export default function HomePage() {
    return (
        <div>
            <Header
                primaryLabel="Разделы сайта:"
                primaryLinks={[
                    { href: "#aboutMe", label: "Обо мне↗"},
                    { href: "#work", label: "Работа↗"}, 
                    { href: "#projects", label: "Проекты↗"}, 
                    { href: "#texts", label: "Тексты↗"}, 
                ]}
                secondaryLabel="А меня можно найти тут:"
                secondaryLinks={[
                    { href: "mailto:you@example.com", label: "Email↗" },
                    { href: "https://t.me/...", label: "Telegram↗", external: true },
                    { href: "https://dprofile.ru/...", label: "Dprofile↗", external: true },
                    { href: "https://instagram.com/...", label: "Insta↗", external: true },
                ]}
            />
            <AboutSection />
            <WorkSection />
            <ProjectsSection />
            <TextsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}