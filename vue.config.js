const VueMarkDownOptions = require('./scripts/vue-markdown-loader.conf');
module.exports = {
  productionSourceMap: false,
  parallel: false,
  publicPath: '.',
  chainWebpack (config) {
    config.resolve.extensions.add('.md');
    config.resolve.alias.set('muse-ui', '@rocka/muse-ui');
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(VueMarkDownOptions);
  }
};
