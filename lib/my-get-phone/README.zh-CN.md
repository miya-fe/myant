# my-get-phone 授权手机号

## 代码演示

### 基础用法

```html
<my-get-phone title="授权手机号" :visible="visible" @cancel="onCancel"></my-get-phone>
```

### 获取手机号和验证码

```html
<my-get-phone title="授权手机号" :visible="visible" @confirm="onConfirm"></my-get-phone>
```

## API

### my-get-phone props

| 参数     | 说明             | 类型      | 默认值   |
| -------- | ---------------- | --------- | -------- |
| visible  | 是否显示弹出层   | _boolean_ | `false`  |
| title    | 弹出框标题       | _number_  | -        |
| height   | 弹出框高度       | _string_  | `600rpx` |
| showCode | 是否显示验证码   | _boolean_ | `true`   |
| showDesc | 是否显示协议文字 | _boolean_ | `true`   |

### my-get-phone events

| 事件名       | 说明                                                 | 回调参数                  |
| ------------ | ---------------------------------------------------- | ------------------------- |
| cancel       | 取消                                                 | `-`                       |
| get-code     | 获取验证码                                           | `Object: { phone }`       |
| get-protocol | 点击协议时触发(type: user-用户协议/privacy-隐私协议) | `{ type }`                |
| confirm      | 点击确定时触发                                       | `Object: { phone, code }` |

### slot 插槽

自定义查看协议（位置处于按钮上方）
