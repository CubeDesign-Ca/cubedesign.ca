/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  i18n,
  reactStrictMode: true,
}

module.exports = nextConfig
