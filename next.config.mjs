/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      }, {
        protocol: "https",
        hostname: "images.reavid.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
