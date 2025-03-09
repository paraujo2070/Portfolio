import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/app/image/**',
        search: '',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
