import { getDictionary } from "@/i18n/getDictionary";
import { getProjects } from "@/i18n/getProjects";

export async function getHomePageData(locale) {
    const [dictionary, projects] = await Promise.all([
        getDictionary(locale),
        getProjects(locale),
    ]);

    return { dictionary, projects };
}

export function getFooterProps(dictionary) {
    return {
        note: dictionary.footer.note,
        toTopLabel: dictionary.footer.toTop,
    };
}
