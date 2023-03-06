const CracoLessPlugin = require('craco-less');

const pxToViewport = require('postcss-px-to-viewport-8-plugin');
const vw = pxToViewport({
  viewportWidth: 375,
  unitPrecision: 6,
  unitToConvert: 'px',
  propList: ['*']
});

module.exports = {
  webpack: {},
  babel: {}, // 配置less-loader
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
    }
  }
};
