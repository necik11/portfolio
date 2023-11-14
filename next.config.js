const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
const repo = 'portfolio'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`
/** @type {import('next').NextConfig} */
const nextConfig = {
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
