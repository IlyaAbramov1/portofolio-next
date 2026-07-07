import AnimatedSvgIcon from "@/components/ui/AnimatedSvgIcon/AnimatedSvgIcon";

import styles from "./PrimaryButton.module.css";

function ButtonIcon({ icon, iconAlt = "" }) {
    if (!icon) return null;

    if (typeof icon === "string" && icon.startsWith("/")) {
        return (
            <AnimatedSvgIcon
                src={icon}
                size={16}
                className={styles.icon}
            />
        );
    }

    return <span className={styles.icon}>{icon}</span>;
}

function ButtonContent({ children, icon, iconAlt, text }) {
    const label = children ?? text;

    return (
        <>
            {label ? <span className={styles.label}>{label}</span> : null}
            <ButtonIcon icon={icon} iconAlt={iconAlt} />
        </>
    );
}

export default function PrimaryButton({
    children,
    className = "",
    text,
    href,
    icon,
    iconAlt,
    ...props
}) {
    const classNames = `${styles.buttonPrimary} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classNames} {...props}>
                <ButtonContent text={text} icon={icon} iconAlt={iconAlt}>
                    {children}
                </ButtonContent>
            </a>
        );
    }

    return (
        <button type="button" className={classNames} {...props}>
            <ButtonContent text={text} icon={icon} iconAlt={iconAlt}>
                {children}
            </ButtonContent>
        </button>
    );
}
