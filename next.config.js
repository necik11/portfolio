const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
const isProd = process.env.NODE_ENV = "production";

const repo = 'portfolio';
const assetPrefix = isProd ? `/${repo}/` : "";
const basePath = isProd ? `/${repo}/` : "";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions:["js", "jsx", "md", "mdx", "ts", "tsx"],
  // any configs you need
  basePath: basePath,
  assetPrefix: assetPrefix,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  }

}

module.exports = withNextra(nextConfig)
