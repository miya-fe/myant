const { join } = require('path')

module.exports = {
  /**
   * 小程序自动批量打包和上传的相关配置
   */
  miniProgramBundle: [
    {
      autoPublish: false, //是否自动上传
      appId: '', //小程序的APPID
    },
  ],

  build: {
    mobile: {
      chainWebpack: (config) => {},
      webpack: {},
    },
    desktop: {},
    mini: {},
  },

  site: {
    defaultLang: 'zh-CN',
    outputDir: join(__dirname, 'dist'),
    publicPath: '',
    locales: {
      'zh-CN': {
        title: 'myant',
        logo: 'http://hh-oss-picture.miyapay.com/box/7c472992c6f2e4bbe74a9b218044e19a.png',
        description: 'myant微信小程序组件库',
        langLabel: '中文',
        searchConfig: {
          apiKey: '',
          indexName: 'myant',
          placeholder: '搜索文档...',
        },
        nav: [
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
              {
                path: 'cell',
                title: 'Cell 单元格',
              },
              {
                path: 'layout',
                title: 'Layout 布局',
              },
            ],
          },
          {
            title: '表单组件',
            items: [
              {
                path: 'input',
                title: 'Input 输入框',
              },
              {
                path: 'textarea',
                title: 'textarea 文本框',
              },
            ],
          },
        ],
      },
    },
  },
}
