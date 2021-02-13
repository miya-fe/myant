# search-bar 搜索框

## 代码演示

### 基础用法

```html
<my-search-bar placeholder="请输入城市名称" />
```

### 自带关键字的搜索框

通过指定 `keywords` 属性值，会默认填充指定的关键字

```html
<my-search-bar placeholder="请输入城市名称" keywords="myant" />
```

### 不可输入状态的搜索框

通过指定 `disabled` 属性值，可设置搜索框不可输入（默认值：`false`）

```html
<my-search-bar disabled placeholder="请输入城市名称" />
```

## API

### search-bar props

| 参数        | 说明       | 类型      | 默认值             |
| ----------- | ---------- | --------- | ------------------ |
| keywords    | 默认关键字 | _string_  | `-`                |
| disabled    | 是否禁用   | _boolean_ | `false`            |
| placeholder | 提示语     | _string_  | `请输入关键字搜索` |

### search-bar events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| click  | 点击搜索框时触发         | _event: Event_ |
| focus  | 搜索框获得焦点时触发     | _event: Event_ |
| change | 搜索框文本发生变化时触发 | _event: Event_ |
| blur   | 搜索框失去焦点时触发     | _event: Event_ |
