const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
 /* chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
  .set('views',resolve('src/views'))
  .set('assets',resolve('src/assets'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
    //config.resolve.extensions
  }*/
  configureWebpack:{
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias:{
        '@':  resolve('src'),
        'assets': resolve('src/assets'),
        'common':resolve('src/common'),
        'components':resolve('src/components'),
        'network':resolve('src/network'),
        //!*'router':'@/router',
        'store':resolve('src/store'),
        'views':resolve('src/views'),
      }
      /*: {
        '@': resolve('src'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'common':resolve('src/common'),
        'components':'src/components',
        'network':resolve('src/network'),
        /!*'router':'@/router',
        'store':'@/store',*!/
        'views':resolve('src/views'),
      }*/
    },
  }
}
