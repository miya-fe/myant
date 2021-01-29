# popup 弹出层

## 代码演示

### 基础用法

```html
<my-popup :visible="visible" @close="onClose">
  <view>居中</view>
</my-popup>
```

### 弹出位置

通过position属性设置弹出位置，默认居中弹出，可以设置为top、bottom、left、right

```html
<my-popup :visible="visible" position="bottom" @close="onClose"></my-popup>
```

## API

### tabs props

| 参数       | 说明               | 类型       | 默认值 |
| ---------- | ----------------- | -------- | ------ |
| visible    | 是否显示弹出层      | _boolean_     | `false` |
| z-index    | z-index 层级      | _number_      | `100`   |
| overlay    | 是否显示遮罩层      | _boolean_     | `true` |
| duration   | 动画时长，单位为毫秒 | _number_      | `300` |
| position   | 弹出位置，可选值: top/bottom/right/left/center | _string_  | `center` |
| round      | 是否显示圆角        | _boolean_    | `true` |
| customStyle  | 自定义弹出层样式	        | _string_    | `` |
| overlayStyle | 自定义遮罩层样式	        | _string_    | `` |
| height      | position为top/bottom时需设置高度  | _string_    | `30%` |
| width       | position为right/left时需设置宽度  | _string_    | `30%` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭  | _boolean_    | `true` |
| safeAreaInsetBottom | 是否为 iPhoneX 留出底部安全距离  | _boolean_    | `true` |
| safeAreaInsetTop | 是否留出顶部安全距离  | _boolean_    | `false` |

### popup events

| 事件名 | 说明               | 回调参数 |
| ------ | ---------------- | -------- |
| close | 关闭弹出层时触发 | `-`  |
| click-overlay | 点击遮罩层时触发	 | `-`  |


### slot 插槽

自定义内容