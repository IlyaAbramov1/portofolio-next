import "./globals.css";
import Script from "next/script";

import { EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
    subsets: ["cyrillic", "latin"],
    variable: "--garamond",
    display: "swap"
});
 
export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://abramovdesign.com"),
    title: {
        default: "Илья Абрамов — Дизайнер веба, графики и 2D-моушна",
        template: "%s — Портфолио Ильи Абрамова",
    },
    description: "Я — Илья. Дизайнер веба, графики и два-дэ моушна.",
    icons: {
        icon: "/favicon.svg",
    },
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: "Илья Абрамов — Дизайнер веба, графики и 2D-моушна",
        description: "Я — Илья. Дизайнер веба, графики и два-дэ моушна.",
        url: "https://abramovdesign.com",
        siteName: "Портфолио Ильи Абрамова",
        locale: "ru_RU",
        type: "website",
        images: [
            {
                url: "/og-banner.webp",
                width: 1200,
                height: 630,
                alt: "Портфолио Ильи Абрамова",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Илья Абрамов — Дизайнер веба, графики и 2D-моушна",
        description: "Я — Илья. Дизайнер веба, графики и два-дэ моушна.",
        images: ["/og-banner.webp"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body suppressHydrationWarning className={`${garamond.variable} appBody`}>
                <Script id="theme-init" strategy="beforeInteractive">
                    {`
                        (function() {
                            try {
                                var savedTheme = window.localStorage.getItem('theme');
                                if (savedTheme === 'dark') {
                                    document.body.classList.add('dark-theme');
                                } else if (savedTheme === 'light') {
                                    document.body.classList.remove('dark-theme');
                                }
                            } catch (error) {}
                        })();
                    `}
                </Script>
                <main className="page">{ children }</main>
                <Script id="yandex-metrika" strategy="afterInteractive">
                    {`
                        (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {
                                if (document.scripts[j].src === r) { return; }
                            }
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
                        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104110652', 'ym');

                        ym(104110652, 'init', {
                            ssr: true,
                            webvisor: true,
                            clickmap: true,
                            ecommerce: "dataLayer",
                            referrer: document.referrer,
                            url: location.href,
                            accurateTrackBounce: true,
                            trackLinks: true
                        });
                    `}
                </Script>
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/104110652"
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
            </body>
        </html>
    )
}
