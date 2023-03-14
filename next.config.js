/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        DATABASE_API_URL: process.env.DATABASE_API_URL,
    },
}

module.exports = nextConfig
