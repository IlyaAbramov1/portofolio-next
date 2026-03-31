import HomePage from "@/components/home/HomePage";
import { getHomePageData } from "@/lib/page-data";

export default async function LocaleHomePage({ params }) {
    const { locale } = await params;
    const { dictionary, projects } = await getHomePageData(locale);

    return <HomePage locale={locale} dictionary={dictionary} projects={projects} />;
}
