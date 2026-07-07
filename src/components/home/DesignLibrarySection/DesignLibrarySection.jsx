"use client";

import Image from "next/image";
import HomeBackground from "@/components/home/HomeBackground/HomeBackground";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Reveal from "@/components/ui/Reveal/Reveal";
import { SECTION_IDS } from "@/lib/site";

import styles from "./DesignLibrarySection.module.css";

const SITE_CARDS = [
    { src: "/main/library-block/site-1.webp", lane: "laneLeftTop", delay: "-12s" },
    { src: "/main/library-block/site-2.webp", lane: "laneRightTop", delay: "-10s" },
    { src: "/main/library-block/site-3.webp", lane: "laneLeftBottom", delay: "-8s" },
    { src: "/main/library-block/site-4.webp", lane: "laneRightBottom", delay: "-6s" },
    { src: "/main/library-block/site-1.webp", lane: "laneLeftTop", delay: "1s" },
    { src: "/main/library-block/site-2.webp", lane: "laneRightTop", delay: "4s" },
    { src: "/main/library-block/site-3.webp", lane: "laneLeftBottom", delay: "7s" },
    { src: "/main/library-block/site-4.webp", lane: "laneRightBottom", delay: "10s" },
];

function Bookmark() {
    return (
        <svg
            className={styles.bookmark}
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="71"
            viewBox="0 -24 41 71"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M0 41.4757V-22C0 -23.1046 0.895431 -24 2 -24H39C40.1046 -24 41 -23.1046 41 -22V41.4757C41 43.3463 38.661 44.1931 37.4635 42.756L22.0365 24.2424C21.2369 23.2829 19.7631 23.2829 18.9635 24.2425L3.53648 42.756C2.33898 44.1931 0 43.3463 0 41.4757Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function DesignLibrarySection({ copy }) {
    const ctaText = copy.cta?.replace("↗", "").trim();

    return (
        <section id={SECTION_IDS.designLibrary} className="innerContainer">
            <Reveal>
                <div className={styles.section}>
                    <div className={styles.background} aria-hidden="true">
                        <HomeBackground
                            placement="fill"
                            mode="library"
                        />
                        <div className={styles.pattern} />
                    </div>

                    <Bookmark />

                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            <span className={styles.titleHighlight}>{copy.title}</span>
                            <span className={styles.titleText}>{copy.description}</span>
                        </h2>
                        <PrimaryButton
                            className={styles.cta}
                            href={copy.href}
                            icon="↗"
                            text={ctaText}
                            target="_blank"
                            rel="noreferrer"
                        />
                    </div>

                    <div className={styles.visual} aria-hidden="true">
                        <div className={styles.siteLayer}>
                            {SITE_CARDS.map((card, index) => (
                                <div
                                    key={`${card.src}-${index}`}
                                    className={`${styles.siteCard} ${styles[card.lane]}`}
                                    style={{ "--delay": card.delay }}
                                >
                                    <Image
                                        src={card.src}
                                        alt=""
                                        width={318}
                                        height={233}
                                        sizes="(max-width: 560px) 170px, 220px"
                                        className={styles.siteImage}
                                    />
                                </div>
                            ))}
                        </div>

                        <Image
                            src="/main/library-block/iphone-library.webp"
                            alt=""
                            width={2367}
                            height={4897}
                            sizes="(max-width: 560px) 246px, 320px"
                            className={styles.phone}
                            priority={false}
                        />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
