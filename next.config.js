/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['216.250.10.105'],
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '216.250.10.105',
  //       port: '8080',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
