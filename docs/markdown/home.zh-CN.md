<div class="card">
  <div class="van-doc-intro">
    <img class="van-doc-intro__logo" style="width: 120px; height: 120px;" src="http://hh-oss-picture.miyapay.com/box/e0ad6809af6c6738a84ad79b824980cf.png">
    <h2 style="margin: 0; font-size: 36px; line-height: 60px;">myant</h2>
    <p>轻量、可靠的 uniapp 跨平台组件库</p>
  </div>
</div>

### 特性

- 支持按需引入
- 支持 TS
- 支持 `微信小程序` `支付宝小程序` `H5`

### 快速上手

#### 安装

```html
yarn add @myant/uni -S 
或 
npm i @myant/uni -S
```

#### 配置

集成方式参考 uni-app 第三方 UI 库集成方法

```html
"easycom": { 
    "autoscan": true, 
    "custom": { 
        "^my-(.*)": "@myant/uni/lib/my-$1/index.vue" 
    } 
}
```

### 贡献代码

使用过程中发现任何问题都可以提 [Issue](https://github.com/miya-fe/myant/issues) 给我们。

### 浏览器支持

现代浏览器以及 Android 4.0+, iOS 8.0+。

### 生态

| 项目                                                                                                   | 描述             |
| ------------------------------------------------------------------------------------------------------ | ---------------- |
| [myant-cli](https://github.com/miya-fe/myant/tree/master/packages/myant-cli)                           | 组件库搭建工具   |
| [myant-eslint-config](https://github.com/miya-fe/myant/tree/master/packages/myant-eslint-config)       | 组件代码规范     |
| [myant-markdown-loader](https://github.com/miya-fe/myant/tree/master/packages/myant-eslint-config)     | markdown 加载器  |
| [myant-stylelint-config](https://github.com/miya-fe/myant/tree/master/packages/myant-stylelint-config) | stylelint-config |

### 链接

- [意见反馈](https://github.com/miya-fe/myant/issues)

### 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源

### 成员

- 小巡
- 小峻
- 炜烽
- 世伟
- 志鹏
- 雁鸣
