# progress 进度条

## 代码演示

### 基础用法

```html
<template>
  <my-progress :percent="0.4"></my-progress>
</template>
```

### 进度条长宽

通过指定 `width`、 `height` 属性值控制当前进度条宽高

```html
<my-progress :percent="0.4" :height="16" :width="200"></my-progress>
```

### 进度条背景色

通过指定 `bgColor`、 `color`属性值可以更换进度条背景色(支持传入 linear-gradient)

```html
<my-progress :percent="0.4" bg-color="#ccc" color="#abc"></my-progress>
```

### 进度条 slot

```html
<my-progress :percent="0.4" bg-color="#ccc" color="#abc">
  <text class="title">已抢2222</text>
</my-progress>
```

## API

### progress props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 当前进度 | _primary\|\_number_ | `0` |
| width | 进度条宽度 | _number_ | `160` |
| height | 进度条高度 | _number_ | `12` |
| bg-color | 进度条背景色 | _string_ | `#FFE7D2` |
| color | 进度条颜色 | _string_ | `linear-gradient(270deg, rgba(255,175,0,1) 0%, rgba(255,119,0,1) 100%)` |

### progress slot 插槽

插槽位于进度条右侧，可用于显示文字信息或其他信息
