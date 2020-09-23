# badge 图标

## 代码演示

### 基础用法
```
<my-badge></my-badge>
```

### 带数字和文字的徽标
通过指定 `text` 属性值，可以为徽标添加文字或数字

```text
<my-badge text="9"></my-badge>
<my-badge text="消息"></my-badge>
```

### 不通颜色的徽标
通过指定 `color` 属性值自定义徽标颜色

```
<my-badge color="#ccc" text="99+"></my-badge>
```

### 自定义字号的徽标
通过指定 `font-size` 属性值设置自定义徽标字号

```
<my-badge font-size="36" text="80"></my-badge>
```

## API
### badge props
|参数|说明|类型|默认值|
|---|----|---|------|
|text|徽标显示的文字|_string_|`-`|
|color|徽标颜色|_string_|`red`|
|font-size|徽标字号|_number_|`-`|
