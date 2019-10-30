module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? `https://cdn.jsdelivr.net/gh/xlzy520/xlzy520.github.io/` : '/',
  chainWebpack(config) {
    const cdn = {
      css: [
        'https://fonts.googleapis.com/css?family=Fira+Mono|Noto+Serif+SC&display=swap',
      ],
      js: [
        'https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js',
        'https://cdn.bootcss.com/jquery-backstretch/2.0.4/jquery.backstretch.min.js',
        'https://cdn.bootcss.com/gitalk/1.5.0/gitalk.min.js',
      ]
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
  configureWebpack: {
    externals:{
      gitalk: 'gitalk',
    }
  }
}
