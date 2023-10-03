/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  trailingSlash: true,
  i18n,
  reactStrictMode: false,
};

module.exports = nextConfig;
