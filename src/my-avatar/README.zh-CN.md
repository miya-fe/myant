# avatar 头像

## 代码演示

### 基础用法

```html
<my-avatar size="huge" src="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-avatar>
```

### 头像大小

通过制定 `size` 属性值，可以更改头像的大小（默认值： `middle`）

```html
<my-avatar size="middle" src="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-avatar>
```

## API

### avatar props

| 参数 | 说明     | 类型                         | 默认值   |
| ---- | -------- | ---------------------------- | -------- |
| src  | 头像地址 | _string_                     | `-`      |
| size | 头像尺寸 | _huge\|large\|middle\|small_ | `middle` |
