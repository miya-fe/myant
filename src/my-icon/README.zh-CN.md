# icon 图标

## 代码演示

### 基础用法
```
<my-icon>&#xe63f;</my-icon>
```

### 按钮大小
通过指定 `size` 属性值，可以更改按钮大小（默认值：`default`）

```text
<my-icon size="large">&#xe63f;</my-icon>
<my-icon size="default">&#xe63f;</my-icon>
<my-icon size="small">&#xe63f;</my-icon>
```

### 禁用按钮
通过指定 `color` 属性值更改图标颜色

```
<my-icon size="large" color="red">&#xe63f;</my-icon>
```

### 自定义图标
通过指定 `src` 属性值设置自定义图标

```
<my-icon 
  size="large"
  src="http://hh-oss-picture.miyapay.com/box/7012120c4f9fed5558450de70b20a11d.png"
></my-icon>
```

### 带徽标的图标
通过指定的 `badge` 插槽，可在图标右上角增加徽标

```
<my-icon size="large">&#xe63f;<my-badge slot="badge" text="9"></my-badge></my-icon>
```
徽标的参数说明请查看[徽标组件my-badge](#/zh-CN/my-badge)

## API
### icon props
|参数|说明|类型|默认值|
|---|----|---|------|
|src|自定义图标地址|_string_|`-`|
|color|图标颜色|_string_|`-`|
|size|图标大小|_string(large\|default\|small)\|number_|`default`|
|class-prefix|自定义图标样式前缀|_string_|`-`|

### icon events
|事件名|说明|回调参数|
|---|----|---|
|click|点击图标时触发|_event: Event_|

### icon slots
|名称|说明|
|---|----|
|badge|自定义徽标|

## icon 字典
### 字典
[链接](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=1926676&keyword=&project_type=&page=)