/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ✅ skips ESLint errors on build
  },
  typescript: {
    ignoreBuildErrors: true,   // ✅ skips TypeScript errors on build
  },
};

module.exports = nextConfig;

