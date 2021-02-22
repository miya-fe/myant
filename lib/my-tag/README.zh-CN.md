# tag 标签

## 代码演示

### 基础用法

```html
<my-tag>默认标签</my-tag>
```

### 标签类型

通过指定 `type` 属性值，可以设置一级和二级标签（默认值：one-tag）

```html
<my-tag type="one-tag">一级标签</my-tag> <my-tag type="two-tag">二级标签</my-tag>
```

## API

### tag props

| 参数 | 说明     | 类型               | 默认值    |
| ---- | -------- | ------------------ | --------- |
| type | tag 类型 | _one-tag\|two-tag_ | `one-tag` |

### tag slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签文字信息 |
