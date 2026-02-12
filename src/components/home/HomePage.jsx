import styles from "./HomePage.module.css";

import Header from "@/components/ui/Header/Header"
import AboutSection from "./AboutSection/AboutSection";
import WorkSection from "./WorkSection/WorkSection";
import ClientsSection from "./ClientsSection/ClientsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import TextsSection from "./TextsSection/TextsSection";
import ContactSection from "./ContactSection/ContactSection";
import FollowSection from "./FollowSection/FollowSection";
import Footer from "@/components/ui/Footer/Footer"

export default function HomePage() {
    return (
        <div>
            <Header
                primaryLabel="Разделы сайта:"
                primaryLinks={[
                    { href: "#aboutMe", label: "Обо мне↗"},
                    { href: "#work", label: "Работа↗"}, 
                    { href: "#clients", label: "Клиенты↗"}, 
                    { href: "#projects", label: "Проекты↗"}, 
                    { href: "#texts", label: "Тексты↗"}, 
                ]}
                secondaryLabel="А меня можно найти тут:"
                secondaryLinks={[
                    { href: "mailto:ilyaabramov29@gmail.com", label: "Email↗" },
                    { href: "http://t.me/abramovdesiqn", label: "Telegram↗", external: true },
                    { href: "https://dprofile.ru/ilyaabramov", label: "Dprofile↗", external: true },
                    { href: "https://instagram.com/abramovdesiqn", label: "Insta↗", external: true },
                ]}
            />
            <AboutSection />
            <FollowSection />
            <WorkSection />
            <ClientsSection />
            <ProjectsSection />
            <TextsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}
