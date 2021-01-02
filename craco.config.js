const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    plugins: [
      ["import", { libraryName: "antd", style: true }],
      [
        "import",
        {
          // 导入一个插件
          libraryName: "arctic-business-component", // 暴露的库名
          camel2DashComponentName: false, // 关闭驼峰转换
          customName: (name) => {
            return `arctic-business-component/lib/${name}`; // 核心配置 根据你自己的组件目录配置
          },
          style: (name) => `${name}/index.css`, // 转换后的路径
        },
        "arctic-business-component",
      ],
    ],
  },
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
