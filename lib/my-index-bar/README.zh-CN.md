# index-bar 索引栏

## 代码演示

### 基础用法

```html
<my-index-bar>
  <my-index-anchor style="background-color: red" index="A" />
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <my-index-anchor index="B" />
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <my-index-anchor index="C" />
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
  <text class="text-line">这是一行</text>
</my-index-bar>
```

### 自定义索引文本

通过指定 `label` 属性值，可以替换索引的 index 文本

```html
<my-index-anchor index="A" label="重庆" />
```

## API

### indexBar props

| 参数               | 说明         | 类型             | 默认值 |
| ------------------ | ------------ | ---------------- | ------ |
| default-anchor-key | 默认索引 key | _number\|string_ | `-`    |

### indexBar events

| 事件名 | 说明                          | 回调参数                  |
| ------ | ----------------------------- | ------------------------- |
| change | 当 indexAnchor 焦点发生变化时 | _index: string \| number_ |

### indexAnchor props

| 参数  | 说明     | 类型             | 默认值 |
| ----- | -------- | ---------------- | ------ |
| label | 索引文本 | _string\|number_ | `-`    |
| index | 索引 key | _string\|number_ | `-`    |
