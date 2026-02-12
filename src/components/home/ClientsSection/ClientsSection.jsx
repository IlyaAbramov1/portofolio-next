import BlockHeader from "@/components/ui/BlockHeader/BlockHeader";
import Reveal from "@/components/ui/Reveal/Reveal";

import styles from "./ClientsSection.module.css";

const clients = [
    { id: "alfa", label: "Alfa", file: "Alfa.svg" },
    { id: "betboom", label: "Betboom", file: "Betboom.svg" },
    { id: "colizeum", label: "Colizeum", file: "Colizeum.svg" },
    { id: "cyber", label: "Cyber", file: "Cyber.svg" },
    { id: "dodo", label: "Dodo", file: "Dodo.svg" },
    { id: "makbush", label: "Makbush", file: "Makbush.svg" },
    { id: "okko", label: "Okko", file: "Okko.svg" },
    { id: "sports", label: "Sports", file: "Sports.svg" },
    { id: "winline", label: "Winline", file: "Winline.svg" },
];

export default function ClientsSection() {
    const marqueeItems = [...clients, ...clients];

    return (
        <section id="clients" className="innerContainer">
            <BlockHeader iconName="clients" title="Клиенты" />
            <Reveal>
                <div className={styles.marquee} aria-label="Клиенты">
                    <div className={styles.marqueeTrack}>
                        {marqueeItems.map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className={styles.clientLogo}
                                aria-hidden={index >= clients.length}
                            >
                                <img
                                    src={`/clients/light/${client.file}`}
                                    alt={index < clients.length ? client.label : ""}
                                    className={styles.logoLight}
                                />
                                <img
                                    src={`/clients/dark/${client.file}`}
                                    alt=""
                                    className={styles.logoDark}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
