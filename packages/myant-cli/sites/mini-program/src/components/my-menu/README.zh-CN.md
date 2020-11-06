# menu 菜单

## 代码演示

### 基础用法

```html
<template>
  <my-menu v-model="verticalIndex" :menus="menu" direction="vertical">
    <view>content</view>
  </my-menu>
</template>
<script lang="ts">
  export default {
    data: (): object => {
      return {
        verticalIndex: 0,
        menu: [
          {
            icon: 'iconfont icon-demo',
            src: 'http://hh-oss-picture.miyapay.com/box/29f26710c56b781f03c0e889bd7c280d.svg',
            title: '热销',
          },
          {
            title: '优惠',
          }
        ]
      }
    }
    methods: {
      handleSelect(obj: object): void {
        console.log(obj)
      }
    }
  }
</script>
```

### 菜单模式

通过指定 `direction` 属性值控制当前展示横向菜单或者垂直菜单，默认`vertical`

```html
<my-menu :menus="menu" direction="horizontal"></my-menu>
```

### 进度条宽度

通过指定 `width`属性值可以控制垂直菜单宽度，默认宽度 160rpx

```html
<my-menu :menus="menu" :width="200"></my-menu>
```

### 选中底部横条颜色

通过指定`themeColor`属性值可以更换水平菜单当前选中底部横条颜色

```html
<my-menu :menus="menu" theme-color="#f70"></my-menu>
```

### 菜单 slot

主要用于垂直菜单空白区域显示内容，水平模式下为菜单下方区域

```html
<my-menu :menus="menu">content</my-menu>
```

## API

### menu props

| 参数           | 说明             | 类型               | 默认值     |
| -------------- | ---------------- | ------------------ | ---------- |
| menus          | 菜单项           | _primary\|\_array_ | `[]`       |
| width          | 垂直菜单宽度     | _number_           | `160`      |
| themeColor     | 菜单选中横条颜色 | _string_           | `#F70`     |
| direction      | 菜单展示方式     | _string_           | `vertical` |
| value(v-model) | 当前菜单选中项   | _number_           | `0`        |

### menu events

| 事件名         | 说明                     | 回调参数                     |
| -------------- | ------------------------ | ---------------------------- |
| input(v-model) | 当前菜单的索引位置       | _index_                      |
| selected       | 返回当前菜单 item 与索引 | _Object{ ...item, \$index }_ |

### menu slot 插槽

主要用于垂直菜单空白区域显示内容
