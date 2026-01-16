import "./globals.css";

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
            </body>
        </html>
    )
}
