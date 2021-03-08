const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  webpack: (config, { defaultLoaders }) => {
    // Need to patch the babel config to support monorepo setup
    defaultLoaders.babel.options.babelrc = true;
    defaultLoaders.babel.options.rootMode = 'upward';
    return config;
  },
});
