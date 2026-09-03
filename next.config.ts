import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com",
              "font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com",
              "img-src 'self' data: https://*.tile.openstreetmap.org https://*.openstreetmap.org",
              "frame-src 'self' https://www.openstreetmap.org",
              "connect-src 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
