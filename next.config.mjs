/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      // These breakpoints tell Next.js to generate multiple sizes for your images.
      deviceSizes: [320, 640, 768, 1024, 1280, 1536],
      imageSizes: [16, 32, 48, 64, 96],

    },
  };
  
  export default nextConfig;