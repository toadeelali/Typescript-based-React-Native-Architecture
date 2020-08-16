module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-styled-components'],
    ["module:react-native-dotenv"],
    [
      'module-resolver',
      {
        root: ['.', 'src'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.ios.tsx', '.android.tsx'],
      },
    ],
  ],
};
