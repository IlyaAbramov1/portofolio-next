export const PROJECT_TAGS = {
    new: {
        label: {
            ru: "Новое",
            en: "New",
        },
        variant: "featured",
    },
    specialProject: {
        label: {
            ru: "Special_project",
            en: "Special_project",
        },
        icon: "/icons/light-theme/special_project.svg",
        variant: "mint",
    },
    web: {
        label: {
            ru: "Web",
            en: "Web",
        },
        icon: "/icons/light-theme/web.svg",
        variant: "cyan",
    },
    graphic: {
        label: {
            ru: "Графика",
            en: "Graphic",
        },
        icon: "/icons/light-theme/graphic.svg",
        variant: "pink",
    },
    branding: {
        label: {
            ru: "Брендинг",
            en: "Branding",
        },
        icon: "/icons/light-theme/branding.svg",
        variant: "branding",
    },
    motion: {
        label: {
            ru: "Моушн",
            en: "Motion",
        },
        icon: "/icons/light-theme/motion.svg",
        variant: "orange",
    },
    product: {
        label: {
            ru: "Продукт",
            en: "Product",
        },
        icon: "/icons/light-theme/web.svg",
        variant: "cyan",
    },
    identity: {
        label: {
            ru: "Айдентика",
            en: "Identity",
        },
        icon: "/icons/light-theme/branding.svg",
        variant: "coral",
    },
};

export const PROJECT_ADDITIONAL_TEXT = "«Учу» — это я говорю без пафоса. Учеба — это необходимость, как мне кажется. Спустя 6 лет работы я пришёл к инженерии и коду, потому что дизайн для меня — это не просто картинка. Это система. Это логика. Это идея, которая оживает и становится частью чего-то большего.";

export function getProjectTag(tagId, locale = "ru") {
    const tag = PROJECT_TAGS[tagId];

    if (!tag) return null;

    return {
        id: tagId,
        ...tag,
        label: tag.label?.[locale] || tag.label?.ru || tagId,
    };
}

export function getProjectTags(tagIds = [], locale = "ru") {
    return tagIds.map((tagId) => getProjectTag(tagId, locale)).filter(Boolean);
}

export function inferProjectTagIds(description = "") {
    const source = description.toLowerCase();

    if (source.includes("веб-спецпроект") || source.includes("web special")) {
        return ["specialProject", "web"];
    }

    if (source.includes("веб") || source.includes("web")) {
        return ["web"];
    }

    if (source.includes("граф") || source.includes("graphic")) {
        return ["graphic"];
    }

    if (source.includes("бренд") || source.includes("brand")) {
        return ["branding"];
    }

    if (source.includes("моуш") || source.includes("motion")) {
        return ["motion"];
    }

    if (source.includes("продукт") || source.includes("product")) {
        return ["product"];
    }

    if (source.includes("айден") || source.includes("identity")) {
        return ["identity"];
    }

    return [];
}

export function inferProjectYear(description = "") {
    return description.match(/\b20\d{2}\b/)?.[0] || "";
}
