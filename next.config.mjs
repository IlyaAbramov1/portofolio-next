import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
    output: "export",
    pageExtensions: ["js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
