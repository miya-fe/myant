# button 按钮

## 代码演示

### 基础用法
```
<my-button>按钮</my-button>
```

### 按钮类型
通过指定 `type` 属性值，可以更改按钮展示类型

```text
<my-button type="primary">primary</my-button>
<my-button type="default">default</my-button>
<my-button type="default">default</my-button>
<my-button type="dashed">dashed</my-button>
<my-button type="text">text</my-button>
```

### 按钮大小
通过指定 `size` 属性值，可以更改按钮大小（默认值：`default`）

```text
<my-button size="small" type="primary">primary</my-button>
```

### 禁用按钮
通过指定 `disable` 属性值禁用按钮，按钮禁用后不再响应 `click` 事件

```
<my-button :disable="true" size="small" type="primary">primary</my-button>
```

## API
### button props
|参数|说明|类型|默认值|
|---|----|---|------|
|type|按钮类型|_primary\|default\|dashed\|text_|`default`|
|size|按钮大小|_default\|small_|`default`|
|disable|是否禁用|_boolean_|`false`|
|hover-class|指定hover状态的class|_string_|`-`|
|div-class|自定义class|_string_|`-`|
|loading|是否处于加载状态|_boolean_|`false`|
|icon|按钮图标|_string(参考my-icon组件类型)_|`-`|
|open-type|微信开放能力|_string[参考](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)_|`-`|