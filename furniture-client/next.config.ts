import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ must be top-level, not inside experimental
  allowedDevOrigins: ["http://192.168.1.175:3000", "http://localhost:3000"],
};

export default nextConfig;
