const { defineConfig } = require('@vue/cli-service')
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [
  //     new NodePolyfillPlugin({
  //       excludeAliases: ['console'],
  //     }),
  //   ],
  // },
  chainWebpack: (config) => {
    const jsRule = config.module.rule('js')

    // 使用 esbuild-loader 替换 babel-loader
    jsRule.use('babel-loader').loader('esbuild-loader').options({
      loader: 'jsx',
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      target: 'chrome80',
    })
  },
})
