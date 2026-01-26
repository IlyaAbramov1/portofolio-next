"use client";

import Header from "@/components/ui/Header/Header"
import Footer from "@/components/ui/Footer/Footer"
import styles from "./Prose.module.css";

export default function Prose({ 
    headerProps,
    children
}) {
    return (
        <div className={styles.prose}>
            <Header {...headerProps} />
            <section className="innerContainer">
                <div className={styles.articleContent}>
                    {children}
                </div>
            </section>
            <Footer />
        </div>
    )
}
