export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abramovdesign.com";

export const SITE_LINKS = {
    email: "mailto:ilyaabramov29@gmail.com",
    telegram: "http://t.me/abramovdesiqn",
    dprofile: "https://dprofile.ru/ilyaabramov",
    instagram: "https://instagram.com/abramovdesiqn",
    sirena: "https://sirena.team",
    sports: "https://sports.ru/",
    dodo: "https://dodopizza.ru/samara",
    tomat: "http://tomat.team/",
    telegramChannel: "https://t.me/tehnichka_design/",
};

export const SECTION_IDS = {
    about: "aboutMe",
    follow: "follow",
    work: "work",
    designLibrary: "designLibrary",
    clients: "clients",
    projects: "projects",
    texts: "texts",
    contact: "contact",
};

export const STATIC_FILES = {
    cv: "/CV_Ilya_Abramov.pdf",
    logo: "/main-logo.svg",
    ogBanner: "/og-banner.webp",
    favicon: "/favicon.svg",
};

export const YANDEX_METRIKA_ID = 104110652;

export const THEME_INIT_SCRIPT = `
    (function() {
        try {
            var savedTheme = window.localStorage.getItem("theme");
            if (savedTheme === "dark") {
                document.body.classList.add("dark-theme");
            } else if (savedTheme === "light") {
                document.body.classList.remove("dark-theme");
            }
        } catch (error) {}
    })();
`;

export const YANDEX_METRIKA_SCRIPT = `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}", "ym");

    ym(${YANDEX_METRIKA_ID}, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
    });
`;
