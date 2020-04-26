module.exports = {
  lintOnSave: false,
  configureWebpack:{
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': 'src',
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        /*'router':'@/router',
        'store':'@/store',*/
        'views':'@/views',
      }
    },
  }
}
