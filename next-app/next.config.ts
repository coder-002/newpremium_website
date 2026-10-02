import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [75, 85],
    formats: ["image/webp"],
  },
};

export default nextConfig;
