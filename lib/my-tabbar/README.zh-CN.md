# tabbar 底部 tab

## 代码演示

### 基础用法

```html
<my-tabbar default-tab="order">
  <my-tabbar-item tab="home">首页</my-tabbar-item>
  <my-tabbar-item tab="order">订单</my-tabbar-item>
  <my-tabbar-item tab="owner">我的</my-tabbar-item>
</my-tabbar>
```

### 自定义 tabbar 的颜色

通过指定 `active-color` 和 `inactive-color` 属性值，自定义 tabbar 默认和选中状态的颜色（active-color 默认：#222；inactive-color 默认值：#999）

```html
<my-tabbar default-tab="order" active-color="red" inactive-color="#ccc">
  <my-tabbar-item tab="home">首页</my-tabbar-item>
  <my-tabbar-item tab="order">订单</my-tabbar-item>
  <my-tabbar-item tab="owner">我的</my-tabbar-item>
</my-tabbar>
```

### tabbar-item 指定图标

通过指定 `icon` 插槽，可指定和指定以 tabbar-item 的图标

```html
<my-tabbar default-tab="order" active-color="red" inactive-color="#ccc">
  <my-tabbar-item tab="home" :icon="tabIcon" inactive-color="#333">首页</my-tabbar-item>
  <my-tabbar-item tab="order">
    <my-icon slot="icon" :size="48">&#xe63f;<my-badge slot="badge" :size="8"></my-badge></my-icon>订单
  </my-tabbar-item>
  <my-tabbar-item tab="owner"> <my-icon slot="icon" :size="48">&#xe63f;</my-icon>我的 </my-tabbar-item>
</my-tabbar>
```

## API

### tabbar props

| 参数           | 说明           | 类型     | 默认值 |
| -------------- | -------------- | -------- | ------ |
| active-color   | 选中的颜色     | _string_ | `#222` |
| inactive-color | 默认的颜色     | _string_ | `#999` |
| default-tab    | 默认选中的 tab | _string_ | `-`    |

### tabbar-item props

| 参数 | 说明       | 类型     | 默认值 |
| ---- | ---------- | -------- | ------ |
| tab  | tab 的 key | _string_ | `-`    |

### tabbar events

| 事件名 | 说明              | 回调参数       |
| ------ | ----------------- | -------------- |
| change | 当切换 tab 时触发 | _event: Event_ |

### tabbar slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | tabbar-item 展示区域 |

### tabbar-item slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | tab 文字内容区域   |
| icon    | tab 自定义图标区域 |
