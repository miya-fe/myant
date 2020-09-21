### loading 加载组件的使用方法

1. 基础使用：

   ```vue
   <template>
     <my-loading></my-loading>
   </template>
   ```

2. 传入更多参数：

   ```vue
   <template>
     <my-loading :showText="false" size="40" type="fixed"></my-loading>
   </template>
   ```

3. props参数：

   | 字段      | 类型     | 含义                              | 默认
   | -------  | ------  | ------------------                | ---------
   | type     | String  | loading类型：primary、fixed        | primary
   | size     | String  | 加载动画尺寸                        | 60
   | color    | String  | 加载动画主题色                       | #FF7700
   | showText | Boolean | 是否显示加载文案                     | true
   | text     | String  | 加载文案                            | 加载中
   | fontSize | String  | 加载文案的字体大小                    | 20
   | layout   | String  | 加载动画与文案对齐方向：column、row    | column

