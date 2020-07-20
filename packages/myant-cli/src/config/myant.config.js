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

  sites: [
    {
      type: 'mobile',
      chainWebpack: (config) => {},
      webpack: {},
    },
    {
      type: 'desktop',
    },
    {
      type: 'mini-program',
    },
  ],
}
