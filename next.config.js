const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  }

}

module.exports = withNextra(nextConfig)
