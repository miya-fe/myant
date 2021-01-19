# toast 提示

## 代码演示

### 基础用法

```html
<my-toast></my-toast>
```

### 提示类型

通过指定 `icon` 属性值，可以更改提示类型

```html
<my-toast icon="success"></my-toast>
<my-toast icon="error"></my-toast>
<my-toast icon="warning"></my-toast>
```

### 纯文字提示

通过指定 `icon="none"` ,可以更改为纯文字提示

```html
<my-toast icon="none"></my-toast>
```

### 控制提示时间

通过指定 `duration` 属性值，可以更改提示持续时间,默认 1500ms

```html
<my-toast :duration="2000" title="提示时间"></my-toast>
```

## API

### loading props

| 参数     | 类型   | 说明                                      | 默认值  |
| -------- | ------ | ----------------------------------------- | ------- |
| title    | String | 提示文字                                  | success |
| icon     | String | toast 类型：success、error、warning、none | success |
| duration | Number | 提示持续时间                              | 1500    |
