/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "@svgr/webpack",
      options: {
        svgo: false,
      },
    });

    return config;
  },
}

module.exports = nextConfig
