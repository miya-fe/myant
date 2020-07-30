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
    title: 'myant',
    logo: '',
    description: 'myant微信小程序组件库',
    nav: [
      {
        title: '基础组件',
        items: [
          {
            path: '/pages/button/index',
            title: 'Button 按钮',
          },
          {
            path: '/pages/cell/index',
            title: 'Cell 单元格',
          },
          {
            path: '/pages/layout/index',
            title: 'Layout 布局',
          },
        ],
      },
      {
        title: '表单组件',
        items: [
          {
            path: '/pages/input/index',
            title: 'Input 输入框',
          },
          {
            path: '/pages/textarea/index',
            title: 'textarea 文本框',
          },
        ],
      },
    ],
  },
}
