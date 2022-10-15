const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  publicPath:
    process.env.NODE_ENV === 'production' ? './dist' : './',
  filenameHashing: true,
  assetsDir: '',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/saveConfig': {
        target: 'http://localhost:28888',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
    },
  },
})
