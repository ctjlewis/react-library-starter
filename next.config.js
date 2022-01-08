module.exports = {
  reactStrictMode: true,
  webpack: ({ ...config }) => {
    /**
     * tszip modules require top-level await because ESM requires top-level
     * await. `next build` Webpack requires `experiments.layers` to be enabled
     * with this configuration.
     */
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return {
      ...config,
    };
  },
};
