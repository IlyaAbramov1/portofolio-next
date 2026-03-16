import "./globals.css";
import Script from "next/script";

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: {
        default: "Портфолио Ильи Абрамова",
        template: "%s — Портфолио Ильи Абрамова",
    },
    description: "",
  icons: {
    icon: "/favicon.svg",
  },
    openGraph: {
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
        images: ["/og-banner.webp"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className="appBody">
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
