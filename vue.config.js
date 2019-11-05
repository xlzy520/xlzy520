const isProd = process.env.NODE_ENV === 'production'
const externals = ()=>{
  if (isProd) {
    return {
      'gitalk': 'Gitalk',
      'leancloud-storage': 'AV'
    }
  }
  return {}
}
module.exports = {
  productionSourceMap: false,
  publicPath: isProd ? `/` : '/',
  devServer: {
    hot: true,
    clientLogLevel: 'warning'
  },
  chainWebpack(config) {
    const cdn = {
      css: [
        'https://fonts.googleapis.com/css?family=Fira+Mono|Noto+Serif+SC&display=swap',
      ],
      js: [
        'https://cdn.jsdelivr.net/gh/chanshiyucx/poi/js/live2d.min.js',
        'https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js',
        'https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js'
      ]
    }
    if (isProd) {
      cdn.js = cdn.js.concat([
        'https://cdn1.lncld.net/static/js/3.0.4/av-min.js',
      ])
    }
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/mixin.scss";
        `
      }
    }
  },
  configureWebpack: config=>{
    config.externals = externals()
  }
}
