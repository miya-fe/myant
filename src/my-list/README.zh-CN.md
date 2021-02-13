# list 列表

## 代码演示

### 基础用法

```html
<my-list>
  <my-list-item title="标题" content="内容" :arrow="true" :can-click="true" thumb="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-list-item>
  <my-list-item title="标题" content="内容" thumb="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-list-item>
  <my-list-item title="标题" content="内容"></my-list-item>
</my-list>
```

## API

### list-item props

| 参数    | 说明       | 类型      | 默认值  |
| ------- | ---------- | --------- | ------- |
| title   | 标题       | _string_  | `-`     |
| content | 内容       | _string_  | `-`     |
| thumb   | 图标       | _string_  | `-`     |
| arrow   | 是否带箭头 | _boolean_ | `false` |

### list-item events

| 事件名 | 说明         | 回调参数       |
| ------ | ------------ | -------------- |
| click  | 当点击时触发 | _event: Event_ |

### list slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | list-item 展示区域 |
