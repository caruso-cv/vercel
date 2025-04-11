const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/\/videos\//],
  runtimeCaching: [
    {
      urlPattern: /\.(mp4|webm)$/i,
      handler: 'NetworkOnly',
      method: 'GET',
      options: {
        plugins: [
          {
            // This plugin removes the Range header before making the fetch, forcing a full (200) response.
            requestWillFetch: async ({ request }) => {
              const newHeaders = new Headers(request.headers);
              newHeaders.delete('range'); // Remove any Range header
              return new Request(request, { headers: newHeaders });
            },
          },
        ],
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

module.exports = withPWA(nextConfig);