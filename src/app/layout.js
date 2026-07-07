import "./globals.css";
import Script from "next/script";
import { withAssetVersion } from "@/lib/assets";
import {
    STATIC_FILES,
    THEME_INIT_SCRIPT,
    YANDEX_METRIKA_ID,
    YANDEX_METRIKA_SCRIPT,
} from "@/lib/site";
import { createSiteMetadata } from "@/lib/metadata";

export const metadata = {
    ...createSiteMetadata({
        title: "Илья Абрамов — Дизайнер веба, графики и 2D-моушна",
        description: "Я — Илья. Дизайнер веба, графики и два-дэ моушна.",
        siteName: "Портфолио Ильи Абрамова",
        titleTemplate: "%s — Портфолио Ильи Абрамова",
    }),
    icons: {
        icon: withAssetVersion(STATIC_FILES.favicon),
    },    
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body suppressHydrationWarning className={`appBody`}>
                <Script id="theme-init" strategy="beforeInteractive">
                    {THEME_INIT_SCRIPT}
                </Script>
                <main className="page">{ children }</main>
                <Script id="yandex-metrika" strategy="afterInteractive">
                    {YANDEX_METRIKA_SCRIPT}
                </Script>
                <noscript>
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
            </body>
        </html>
    )
}
