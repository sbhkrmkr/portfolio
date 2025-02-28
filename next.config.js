module.exports = {
  reactStrictMode: true,
  env: {
    dir: "/",
  },
  // output: "export",
  // distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
        pathname: "?app=vercel.app",
      },
      {
        protocol: "https",
        hostname: "**.shields.io",
        pathname: "/badge/**",
      },
      {
        protocol: "https",
        hostname: "**.shields.io",
        pathname: "/github/**",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.medium.com",
        pathname: "/**",
      },
    ],
  },
};
