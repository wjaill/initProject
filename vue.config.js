module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    host: 'localhost', 
    port: 9527, 
    open: true,
    proxy: {
    '/platform':{
        target:'http://192.168.181.251:6001',
        changeOrigin:true,
        pathRewrite: { 
          '^/platform': '/platform'
        }
      }
    },
    },
  lintOnSave: false
}
