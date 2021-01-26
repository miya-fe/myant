# tabs 标签页

## 代码演示

### 基础用法

```html
<my-tabs :active="active" :height="80" line-color="#f70" @change="onChange">
  <my-tab-item class="tabs-item" name="1">tab 1</my-tab-item>
  <my-tab-item class="tabs-item" name="2">tab 2</my-tab-item>
  <my-tab-item class="tabs-item" name="3">tab 3</my-tab-item>
</my-tabs>
```

### 标签页高度与颜色

通过指定 `lineColor`、 `height` 属性值控制 my-tabs 的高度与选中样式

```html
<my-tabs :active="active" :height="80" line-color="#f70" @change="onChange"> </my-tabs>
```

### 标签页高度与颜色

通过指定 `lineColor`、 `height` 属性值控制 my-tabs 的高度与选中样式

```html
<my-tabs :active="active" :height="80" line-color="#f70" @change="onChange"> </my-tabs>
```

## API

### tabs props

| 参数       | 说明         | 类型                          | 默认值 |
| ---------- | ------------ | ----------------------------- | ------ |
| active     | 当前选中标签 | _primary_\|_string_\|_number_ |        |
| height     | 标签高度     | _number_                      | `80`   |
| line-color | 选中颜色     | _string_                      | `#f70` |

### tabs events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| change | 当前菜单的索引位置 | _index_  |

### tab-item props

| 参数  | 说明           | 类型                          | 默认值      |
| ----- | -------------- | ----------------------------- | ----------- |
| name  | 标签名称       | _primary_\|_string_\|_number_ |             |
| class | 标签默认 class | _string_                      | `tabs-item` |

### tab-item slot 插槽

显示标签名称
