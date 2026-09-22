const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/\/videos\//, /\/vid\//],
  runtimeCaching: [
    {
      // Hero video is same-origin and needs real byte-range requests, so it is
      // left out of this rule and goes straight to the network
      urlPattern: /^(?!.*\/vid\/).*\.(mp4|webm)$/i,
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
  async redirects() {
    return [
      // Retired products. Both were indexed, so send inbound traffic to ECU8,
      // including the shortened paths in case they were ever linked.
      { source: '/solutions/energ8te', destination: '/solutions/ecu8', permanent: true },
      { source: '/solutions/elev8tr', destination: '/solutions/ecu8', permanent: true },
      { source: '/energ8te', destination: '/solutions/ecu8', permanent: true },
      { source: '/elev8tr', destination: '/solutions/ecu8', permanent: true },
      { source: '/ecu8', destination: '/solutions/ecu8', permanent: true },
    ];
  },
};

module.exports = withPWA(nextConfig);