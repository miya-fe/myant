# stepper

## 代码演示

### 基础用法
```
<my-stepper num="11"></my-stepper>
```

### stepper类型
通过指定 `type` 属性值，可以更改按钮stepper类型

```text
<my-stepper type="normal"></my-stepper>
<my-stepper type="empty"></my-stepper>
```


## API
### stepper props
|参数|说明|类型|默认值|
|---|----|---|------|
|type|stepper类型|_normal\|empty_|`normal`|
|num|stepper数值|_number_|`0`|
|limit|是否禁用|_number_|

### stepper events
|事件名|说明|回调参数|
|---|----|---|
|click|点击图标时触发|_event: Event_|
