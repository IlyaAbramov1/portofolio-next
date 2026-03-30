export const ASSET_VERSION = "2026-03-23";

export function withAssetVersion(path) {
    if (!path || !path.startsWith("/")) {
        return path;
    }

    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}v=${ASSET_VERSION}`;
}
