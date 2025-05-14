/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'engineering.ucdavis.edu',
      'news.mit.edu',
      'bostonglobe-prod.cdn.arcpublishing.com',
      'images.ctfassets.net',
      'your-image-domain.com'
    ],
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/publications/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/publications/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 