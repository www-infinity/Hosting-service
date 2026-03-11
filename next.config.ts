import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Hosting-service",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
