/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.iotkiit.in",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
