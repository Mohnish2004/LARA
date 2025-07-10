/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'engineering.ucdavis.edu',
      },
      {
        protocol: 'https',
        hostname: 'news.mit.edu',
      },
      {
        protocol: 'https',
        hostname: 'bostonglobe-prod.cdn.arcpublishing.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
