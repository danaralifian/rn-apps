module.exports =(api)=> {
  api.cache(true)
  return{
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      // ["module-alias", 
      //   { "src": "./src", "expose": "src" }
      // ]
      [
        "babel-plugin-root-import",
        {
          "rootPathSuffix": "./",
          "rootPathPrefix": "~/"
        }
      ]
    ]
  }
};
