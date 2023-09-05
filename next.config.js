const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './About': './pages/about/index.js',
          './User': './pages/user/[uid].js',
        },
      })
    );

    return config;
  },
};
module.exports = nextConfig;