module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@common': ['./src/components/common'],
          '@context': './src/context',
          '@features': './src/features',
          '@authentication': './src/features/authentication',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@config': './src/config',
          '@lib': './src/lib',
          '@models': './src/models',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
