"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./Reveal.module.css";

export default function Reveal({ children, className = "", once = true }) {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px",
  });

  return (
    <div
      ref={ref}
      className={[
        styles.reveal,
        isInView ? styles.visible : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
