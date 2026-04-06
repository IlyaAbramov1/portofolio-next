"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import Reveal from "@/components/ui/Reveal/Reveal";
import { SECTION_IDS } from "@/lib/site";

import styles from "./DesignLibrarySection.module.css";

const PAGE_ITEMS = [
    {
        id: "koji",
        title: "KOJI",
        subtitle: "Дизайн-студия",
        url: "https://www.koji.global/",
        targetAngle: 170,
        delay: 0.14,
        image: "/book-item/after-preview.png",
    },
    {
        id: "choice",
        title: "Choice",
        subtitle: "Дизайн-студия",
        url: "https://choice.studio/",
        targetAngle: 140,
        delay: 0.24,
        image: "/book-item/andrew-trousdale-preview.png",
    },
    {
        id: "offthewall",
        title: "Off the Wall",
        subtitle: "Дизайн-студия",
        url: "https://offthewall.studio/",
        targetAngle: 110,
        delay: 0.34,
        image: "/book-item/eva-sanchez-preview.png",
    },
    {
        id: "feelfactory",
        title: "Feel Factory",
        subtitle: "Креативная студия",
        url: "https://www.feelfactory.pro/ru",
        targetAngle: 80,
        delay: 0.44,
        image: "/book-item/jake-down-smith-preview.png",
    },
    {
        id: "preet",
        title: "Preet Suthar",
        subtitle: "Дизайнер",
        url: "https://preetsuthar.me/",
        targetAngle: 50,
        delay: 0.54,
        image: "/book-item/kowalski-preview.png",
    },
    {
        id: "rocketpand",
        title: "ROCKETPAND",
        subtitle: "Креативная студия",
        url: "https://www.therocketpanda.com/",
        targetAngle: 20,
        delay: 0.64,
        image: "/book-item/michael-garcia-preview.png",
    },
    {
        id: "universal-favourite",
        title: "Universal Favourite",
        subtitle: "Дизайн-студия",
        url: "https://universalfavourite.com.au/",
        targetAngle: -10,
        delay: 0.74,
        image: "/book-item/rauno-preview.png",
    },
    {
        id: "ryo",
        title: "Ryo",
        subtitle: "Дизайн-студия",
        url: "https://www.ryosuke.im/",
        targetAngle: -40,
        delay: 0.74,
        image: "/book-item/ryo-preview.png",
    }
];

const PAGE_TRANSITION = {
    duration: 1.8,
    ease: [0.22, 1, 0.36, 1],
};

const COVER_TRANSITION = {
    duration: 1.95,
    ease: [0.22, 1, 0.36, 1],
};

function BookPage({ item, index, hoverRotate, isOpen }) {
    const pageRotation = -item.targetAngle;
    const frontZIndex = 100 + index * 1;
    const fillZIndex = frontZIndex - 1;
    const hoverFactor = 20 - index * 4;
    const pageOpenProgress = useMotionValue(0);

    useEffect(() => {
        const controls = animate(pageOpenProgress, isOpen ? 1 : 0, {
            duration: 1.15,
            ease: PAGE_TRANSITION.ease,
            delay: isOpen ? item.delay : 0,
        });

        return () => controls.stop();
    }, [isOpen, item.delay, pageOpenProgress]);

    const rotateY = useTransform(
        [pageOpenProgress, hoverRotate],
        ([progress, hover]) => progress * pageRotation + progress * hover * hoverFactor,
    );

    return (
        <>
            <motion.span
                className={`${styles.pageLayer} ${styles.pageFillLayer}`}
                style={{ zIndex: fillZIndex, rotateY }}
            />
            <motion.span
                className={`${styles.pageLayer} ${styles.pageFrontLayer}`}
                style={{ zIndex: frontZIndex, rotateY }}
            >
                <span className={styles.pageContent}>
                    <span className={styles.pageMedia}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="144px"
                            className={styles.pageImage}
                        />
                    </span>
                    <span className={styles.pageMeta}>
                        <span className={styles.pageTitle}>{item.title}</span>
                        <span className={styles.pageSubtitle}>{item.subtitle}</span>
                        <span className={styles.pageUrl}>{item.url}</span>
                    </span>
                </span>
            </motion.span>
        </>
    );
}

function Book() {
    const sceneRef = useRef(null);
    const isInView = useInView(sceneRef, { once: true, amount: 0.45 });
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const [manualOpen, setManualOpen] = useState(false);
    const pointerProgress = useMotionValue(0);
    const coverProgress = useMotionValue(0);
    const hoverRotate = useSpring(
        useTransform(pointerProgress, [-1, 1], [7, 0]),
        { stiffness: 240, damping: 26, mass: 0.45 },
    );
    const isOpen = hasUserInteracted ? manualOpen : isInView;
    const coverRotateY = useTransform(coverProgress, [0, 1], [0, -180]);
    const coverFillRotateY = useTransform(coverProgress, [0, 1], [0, -172]);
    const coverZIndex = useTransform(coverProgress, (value) => (value > 0.62 ? 1 : 9999));
    const coverFillZIndex = useTransform(coverProgress, (value) => (value > 0.62 ? 2 : 9998));

    useEffect(() => {
        const controls = animate(coverProgress, isOpen ? 1 : 0, {
            duration: COVER_TRANSITION.duration,
            ease: COVER_TRANSITION.ease,
        });

        return () => {
            controls.stop();
        };
    }, [coverProgress, isOpen]);

    useEffect(() => {
        function handlePointerMove(event) {
            const width = window.innerWidth || 1;
            const normalized = Math.min(Math.max((event.clientX / width) * 2 - 1, -1), 1);
            pointerProgress.set(normalized);
        }

        function resetPointer() {
            pointerProgress.set(0);
        }

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("blur", resetPointer);
        document.documentElement.addEventListener("mouseleave", resetPointer);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("blur", resetPointer);
            document.documentElement.removeEventListener("mouseleave", resetPointer);
        };
    }, [pointerProgress]);

    function handleToggle() {
        if (!hasUserInteracted) {
            setHasUserInteracted(true);
            setManualOpen(!isOpen);
            return;
        }

        setManualOpen((value) => !value);
    }

    return (
        <div className={styles.bookScene} ref={sceneRef}>
            <button
                type="button"
                className={styles.bookButton}
                onClick={handleToggle}
                aria-label={isOpen ? "Close design library book" : "Open design library book"}
            >
                <motion.div
                    className={styles.bookShell}
                    animate={{
                        x: isOpen ? 60 : 0,
                        y: isOpen ? -12 : 0,
                        rotateZ: isOpen ? -1 : 0,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className={styles.book} aria-hidden="true">
                        <span className={styles.backCoverLayer} />
                        <span className={styles.backCoverPageLayer} />
                        <span className={styles.basePageLayer} />
                        <span className={styles.coverPlaceholderLayer} />
                        <span className={styles.coverPageLayer} />
                        <motion.span
                            className={styles.coverFillLayerShell}
                            initial={false}
                            style={{ rotateY: coverFillRotateY, zIndex: coverFillZIndex }}
                        >
                            <span className={styles.coverFillLayer} />
                        </motion.span>
                        <motion.span
                            className={styles.coverLayer}
                            initial={false}
                            style={{ rotateY: coverRotateY, zIndex: coverZIndex }}
                        >
                            <span className={styles.coverContent}>
                                <span className={styles.coverTitle}>Дизайн-библиотека</span>
                                <span className={styles.coverEdition}>Изд. 2026</span>
                            </span>
                        </motion.span>
                        {PAGE_ITEMS.map((item, index) => (
                            <BookPage
                                key={item.id}
                                item={item}
                                index={index}
                                hoverRotate={hoverRotate}
                                isOpen={isOpen}
                            />
                        ))}
                    </div>
                </motion.div>
            </button>
        </div>
    );
}

export default function DesignLibrarySection({ copy }) {
    return (
        <section id={SECTION_IDS.designLibrary} className="innerContainer">
            <Reveal>
                <div className={styles.section}>
                    <Book />
                    <div className={styles.content}>
                        <h2 className={`h2 ${styles.title}`}>{copy.title}</h2>
                        <p className={`text ${styles.description}`}>{copy.description}</p>
                        <a
                            href={copy.href}
                            className={styles.cta}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {copy.cta}
                        </a>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
