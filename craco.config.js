const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "pink",
              "@link-color": "pink",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
