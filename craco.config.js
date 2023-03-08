const CracoLessPlugin = require('craco-less');
const path = require('path');
const pxToViewport = require('postcss-px-to-viewport-8-plugin');
const vw = pxToViewport({
  viewportWidth: 375,
  unitPrecision: 6,
  unitToConvert: 'px',
  propList: ['*']
});

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  babel: {},
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
