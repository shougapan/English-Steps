/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Example: Add support for importing audio files
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/sounds/", // Adjust the output path if necessary
            publicPath: "/_next/static/sounds/", // Adjust the public path if necessary
          },
        },
      ],
    });

    // Example: Resolve modules from the "src" directory
    config.resolve.modules.push(path.resolve(__dirname, "src"));

    // Return the modified config
    return config;
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
},
};

module.exports = nextConfig;
