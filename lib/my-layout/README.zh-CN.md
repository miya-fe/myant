# layout 布局

## 代码演示

### 基础用法

```html
<my-layout>
  <view>
    <text>我是内容区域</text>
  </view>
</my-layout>
```

### 带 tabbar 的布局

通过指定 `with-tab-bar` 属性值，会在底部固定预留 tabbar 的区域（默认值：`false`）

```html
<my-layout with-tab-bar>
  <view>
    <text>我是内容区域</text>
  </view>
  <my-tabbar slot="tab-bar">
    <my-tabbar-item tab="home">首页一</my-tabbar-item>
    <my-tabbar-item tab="home2">首页二</my-tabbar-item>
    <my-tabbar-item tab="home3">首页三</my-tabbar-item>
  </my-tabbar>
</my-layout>
```

## API

### layout props

| 参数         | 说明                 | 类型      | 默认值  |
| ------------ | -------------------- | --------- | ------- |
| with-tab-bar | 是否带有 tabbar 区域 | _boolean_ | `false` |

### layout slots

| 名称    | 说明                 |
| ------- | -------------------- |
| tab-bar | 底部 tabbar 内容区域 |
