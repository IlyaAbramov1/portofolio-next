import styles from "./BlockHeader.module.css"

export default function BlockHeader({
    text,
    href
}) {
    return (
        <button href={href} className={styles.buttonPrimary}>
            {text}
        </button>
    )
}