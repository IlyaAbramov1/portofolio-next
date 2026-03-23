import HomePage from "@/components/home/HomePage";
import { getDictionary } from "@/i18n/getDictionary";
import { getProjects } from "@/i18n/getProjects";

export default async function LocaleHomePage({ params }) {
    const { locale } = await params;
    const [dictionary, projects] = await Promise.all([
        getDictionary(locale),
        getProjects(locale),
    ]);

    return <HomePage locale={locale} dictionary={dictionary} projects={projects} />;
}
