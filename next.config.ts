import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;
