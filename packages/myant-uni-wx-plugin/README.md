# 微信官方插件打包插件

该包是基于 webpack 和 uniapp 的自定义插件，该插件用于 uniApp 打包过程中自动把需要的官方插件注入到指定的页面依赖（page.json），和项目配置文件（app.json）中

## 安装

#### NPM

```
npm i @myant/uni-wx-plugin -D
```

#### YARN

```
yarn add @myant/uni-wx-plugin --dev
```

## 使用

```
const WxPlugin = require('@myant/uni-wx-plugin')

{
  plugins: [
    new WxPlugin(
      {
        "pages/{index,hidetabIndex}/**": {
          "name": "live-player-plugin"
          "version": "1.1.0",
          "provider": "wx2b03c6e691cd7370"
          "usingComponents": {
            "subscribe": "plugin-private://wx2b03c6e691cd7370/components/subscribe/subscribe",
            "send-coupon": "plugin://sendCoupon/send-coupon"
          }
        }
      },
    ),
  ],
}

```

## options 参数说明

name

```text
类型：string
必须：是
说明：插件名称
```

version

```text
类型：string
必须：是
说明：版本号
```

provider

```text
类型：string
必须：是
说明：插件APPID
```

usingComponents

```text
类型：json
必须：是
说明：页面使用到的组件
```
