# loading 加载中

## 代码演示

### 基础用法

```html
<my-loading></my-loading>
```

### 加载中类型

通过指定 `type` 属性值，可以更改加载中展示类型

```html
<my-loading type="primary"></my-loading> <my-loading type="fixed"></my-loading>
```

### 加载中大小

通过指定 `size` 和 `fontSize` 属性值，可以更改加载中动画及文案的大小

```html
<my-loading size="60" fontSize="20"></my-loading>
```

### 加载中文案

通过指定 `text` 和 `showText` 属性值，可以更改加载中文案及是否显示加载文案

```html
<my-loading text="loading..." :showText="true"></my-loading>
```

## API

### loading props

| 参数     | 类型    | 说明                                | 默认值  |
| -------- | ------- | ----------------------------------- | ------- |
| type     | String  | loading 类型：primary、fixed        | primary |
| size     | String  | 加载动画尺寸                        | 60      |
| color    | String  | 加载动画主题色                      | #FF7700 |
| showText | Boolean | 是否显示加载文案                    | true    |
| text     | String  | 加载文案                            | 加载中  |
| fontSize | String  | 加载文案的字体大小                  | 20      |
| layout   | String  | 加载动画与文案对齐方向：column、row | column  |
