import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers configuration
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Prevent XSS attacks
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // DNS prefetch control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Permissions policy (formerly Feature Policy)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          // Content Security Policy (relaxed for development)
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development'
              ? [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live http://localhost:* http://127.0.0.1:* http://169.254.*:*",
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com http://localhost:* http://127.0.0.1:* http://169.254.*:*",
                  "font-src 'self' https://fonts.gstatic.com data:",
                  "img-src 'self' data: https: blob: http://localhost:* http://127.0.0.1:* http://169.254.*:*",
                  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com ws://localhost:* ws://127.0.0.1:* ws://169.254.*:* http://localhost:* http://127.0.0.1:* http://169.254.*:*",
                  "frame-src 'self' https://vercel.live",
                  "object-src 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "frame-ancestors 'none'"
                ].join('; ')
              : [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                  "font-src 'self' https://fonts.gstatic.com",
                  "img-src 'self' data: https: blob:",
                  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
                  "frame-src 'self' https://vercel.live",
                  "object-src 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "frame-ancestors 'none'",
                  "upgrade-insecure-requests"
                ].join('; '),
          },
        ],
      },
    ];
  },

  // Additional security configurations
  poweredByHeader: false, // Remove X-Powered-By header

  // ESLint configuration - disable strict rules for now
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Compression and performance
  compress: true,

  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
