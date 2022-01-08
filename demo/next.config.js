module.exports = {
  reactStrictMode: true,
  /**
   * This flag is required to import from outside of the demo/ folder.
   */
  experimental: {
    externalDir: true,
  },
  webpack: ({ ...config }) => {
    /**
     * tszip modules require top-level await because ESM requires top-level
     * await.
     */
    config.experiments = {
      topLevelAwait: true
    };
    return {
      ...config,
    };
  },
};
