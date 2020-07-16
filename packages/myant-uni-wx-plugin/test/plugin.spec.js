const WxPlugin = require('../src/index')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

test('wx plugin', () => {
  webpack(
    {
      context: path.join(__dirname, 'project'),
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist-commonjs.js',
        libraryTarget: 'commonjs',
      },
      plugins: [
        new WxPlugin({
          'pages/index/index': {
            name: 'liver-player-plugin',
            version: '1.0.1',
            provider: 'abcdefghijklmn',
            usingComponents: {
              subscrib: 'plugin://send-coupon/send-coupon',
            },
          },
        }),
      ],
    },
    (err, result) => {
      console.log(err)
    }
  )
})
