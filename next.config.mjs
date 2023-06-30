
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.ytimg.com', 'cdn.freebiesupply.com', 'buymeacoffee.com', 'iili.io'],
  },
}

export default nextConfig;