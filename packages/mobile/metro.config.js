/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const {getDefaultConfig} = require('metro-config');

const extraNodeModules = {
  common: path.resolve(__dirname + '/../common'),
};

const watchFolders = [path.resolve(__dirname + '/../common')];

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: [...assetExts.filter(ext => ext !== 'svg'), 'css', 'hcscript'],
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules: new Proxy(extraNodeModules, {
        get: (target, name) =>
          name in target
            ? target[name]
            : path.join(process.cwd(), `node_modules/${name}`),
      }),
    },
    watchFolders,
  };
})();
