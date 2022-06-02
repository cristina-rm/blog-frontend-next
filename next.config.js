require('dotenv').config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  env: {
    API_ENDPOINT: process.env.STRAPI_URL
  }
}

module.exports = nextConfig
