const {
  override,
  addLessLoader,// 使用Less
  addWebpackAlias // 路径别名
} = require('customize-cra')
// 读取路径
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)
// webpack配置
module.exports = override(
  // 使用less
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
      relativeUrls: false,
      modifyVars: { '@primary-color': '#A80000' },
      // cssModules: {
      //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
      // }
    }
  }),
  // 路径别名
  addWebpackAlias({
    '@': resolve('src')
  })
)