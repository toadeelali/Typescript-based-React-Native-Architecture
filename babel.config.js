module.exports = {
  presets: ['module:metro-react-native-babel-preset', "module:react-native-dotenv"],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'module-resolver',
      {
        root: ['.', 'src'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.ios.tsx', '.android.tsx'],
      },
    ],
  ],
};
