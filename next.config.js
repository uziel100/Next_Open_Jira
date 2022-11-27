/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env !== "development",
  swcMinify: true,
}

module.exports = nextConfig
