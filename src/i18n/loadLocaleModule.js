import { defaultLocale } from "./config";

export async function loadLocaleModule(modulesByLocale, locale) {
    const loadModule = modulesByLocale[locale] || modulesByLocale[defaultLocale];
    return loadModule();
}
