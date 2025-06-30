import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // bypass the images domain restriction
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
