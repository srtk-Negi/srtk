import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Create __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2c7eswxxwk.ufs.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Remove the custom webpack config since Next.js handles @ alias natively
  // when you have a tsconfig.json or jsconfig.json configured properly
};

export default nextConfig;
