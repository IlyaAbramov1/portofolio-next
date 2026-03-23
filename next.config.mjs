import createMDX from "@next/mdx";
import { fileURLToPath } from "node:url";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
    output: "export",
    trailingSlash: true,
    pageExtensions: ["js", "jsx", "md", "mdx"],
    turbopack: {
        root: projectRoot,
    },
};

export default withMDX(nextConfig);
