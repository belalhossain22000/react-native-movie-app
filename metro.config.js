const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add this resolver configuration
config.resolver.alias = {
  ...config.resolver.alias,
  'postcss': require.resolve('postcss'),
};

module.exports = config;