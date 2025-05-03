import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    localPatterns: [
      {
        pathname: '/app/image/**',
        search: '',
      },
    ],
    unoptimized: true,
  }
};

export default nextConfig;
