module.exports = {
  reactStrictMode: true,
  webpack: ({ ...config }) => {
    /**
     * For isomorphic tszip imports (import { name } from "cjs-module"),
     * experimental flags are required. This is a temporary workaround for
     * testing.
     */
    // config.experiments = {
    //   topLevelAwait: true,
    //   layers: true,
    // };
    return {
      ...config,
    };
  },
};
