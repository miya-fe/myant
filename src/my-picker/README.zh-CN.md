# picker

## 代码演示

### 基础用法

```html
<my-picker :mode="'selector'" @click="handlePickerClick" :array="array" :array-index="arrayIndex" />
```

### picker 类型

通过指定 `mode` 属性值，可以更改 picker 类型

```html
<my-picker mode="selector"></my-picker>
<my-picker mode="multiSelector"></my-picker>
<my-picker mode="time"></my-picker>
<my-picker mode="date"></my-picker>
<my-picker mode="region"></my-picker>
```

## API

### picker props

| 参数        | 说明                         | 类型                                          | 默认值       |
| ----------- | ---------------------------- | --------------------------------------------- | ------------ |
| mode        | picker 类型                  | _selector\|multiSelector\|time\|date\|region_ | `selector`   |
| array       | 普通选择器数值               | _array_                                       | `[]`         |
| arrayIndex  | 普通选择器下标               | _number_                                      | `0`          |
| multiArray  | 多列选择器选择列表           | _array_                                       | `[[],[]]`    |
| multiIndex  | 多列选择器选择数值           | _array_                                       | `[0, 0]`     |
| start       | 时间选择器有效时间范围的开始 | _string_                                      | `00:00`      |
| end         | 时间选择器有效时间范围的结束 | _string_                                      | `23:59`      |
| time        | 时间选择器值                 | _string_                                      | `00:00`      |
| startDate   | 日期选择器有效时间范围的开始 | _string_                                      | `1900-01-01` |
| endDate     | 日期选择器有效时间范围的结束 | _string_                                      | `2100-12-30` |
| date        | 日期选择器值                 | _string_                                      | `''`         |
| regionValue | 地区选择器值                 | _string_                                      | `''`         |

### picker events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图标时触发 | _event: Event_ |
