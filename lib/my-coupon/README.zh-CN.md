# coupon 券

## 代码演示

### 基础用法

```html
<my-coupon :coupon="coupon"></my-coupon>

注：coupon 属性请参考下文
```

### 带按钮的券

通过指定 `with-btn` 属性值，可以为券添加按钮（默认值：`false`）

```html
<my-coupon with-btn :coupon="coupon">
  <my-button slot="btn" size="small" type="primary">领取</my-button>
</my-coupon>
```

## API

### coupon props

| 参数     | 说明         | 类型      | 默认值  |
| -------- | ------------ | --------- | ------- |
| with-btn | 是否显示按钮 | _boolean_ | `false` |
| coupon   | 券数据       | _object_  | `-`     |

### coupon 属性值

| 名称  | 说明   | 必须 |
| ----- | ------ | ---- |
| logo  | 券图片 | 是   |
| name  | 券名称 | 是   |
| label | 券标签 | 否   |
| desc  | 券说明 | 否   |

### icon events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### slot 插槽

自定义点击按钮
