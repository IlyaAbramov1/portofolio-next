import styles from "@/components/ui/Header/Header.module.css";

export default function PageHeaderIntro({ title, subtitle, description }) {
    return (
        <div className={styles.bottom}>
            <div className="h1">{title}</div>
            {subtitle ? <div className="subText">{subtitle}</div> : null}
            {description ? <div className="text">{description}</div> : null}
        </div>
    );
}
