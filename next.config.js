/** @type {import('next').NextConfig} */

const env = {
  admin: process.env.ADMIN_PATH,
  server: process.env.SERVER_API,
  project: process.env.PROJECT
}
const nextConfig = {
  env: env,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
