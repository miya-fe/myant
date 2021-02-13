# sticky 粘性布局

## 代码演示

### 基础用法

```html
<my-sticky-scroll>
  <my-sticky>
    <view>
      <text>我是固定的头</text>
    </view>
  </my-sticky>
  <view> 内容区域 </view>
  <my-sticky>
    <text>我是固定的底</text>
  </my-sticky>
</my-sticky-scroll>
```

### 自定义距离顶部的固定距离

通过指定 `offset-top` 属性值，可设置粘性区域距离顶部的距离（默认：0）

```html
<my-sticky :offset-top="100">
  <text>我是粘性区域</text>
</my-sticky>
```

## API

### sticky-scroll props

| 参数       | 说明           | 类型             | 默认值 |
| ---------- | -------------- | ---------------- | ------ |
| offset-top | 默认滚动的位置 | _number\|string_ | `0`    |

### sticky props

| 参数        | 说明                   | 类型             | 默认值 |
| ----------- | ---------------------- | ---------------- | ------ |
| offset-top  | 粘性区域距离顶部的距离 | _number\|string_ | `0`    |
| offset-left | 粘性区域距离左侧的距离 | _number\|string_ | `0`    |

### sticky events

| 事件名 | 说明                         | 回调参数                                   |
| ------ | ---------------------------- | ------------------------------------------ |
| change | 当粘性区域状态发生变化时触发 | _{isFixed: boolean, detail: event.detail}_ |

### sticky slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 粘性区域内容 |
