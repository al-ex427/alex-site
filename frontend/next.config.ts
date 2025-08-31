import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://storage.ko-fi.com/cdn/**')]
  }
  /* config options here */
};

export default nextConfig;
