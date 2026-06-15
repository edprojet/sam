import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/espace",
        destination: "/programme",
        permanent: true,
      },
      {
        source: "/espace/:path*",
        destination: "/programme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
