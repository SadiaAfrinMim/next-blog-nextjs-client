import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // allows all top-level hostnames (careful: not recommended in production)
        pathname: "/**", // optional, matches all paths
      },
    ],
  },
};

export default nextConfig;
