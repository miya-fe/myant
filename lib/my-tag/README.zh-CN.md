### tag 标签的使用方法

1. 基础使用：

   ```vue
   <template>
     <my-tag type="one-tag">一级标签</my-tag>
     <my-tag type="two-tag">二级标签</my-tag>
     <my-tag>默认标签</my-tag>
   </template>
   ```

2. props 参数：

   | 字段 | 说明                                              | 默认    |
   | ---- | ------------------------------------------------- | ------- |
   | type | 设置 tag 类型，可选值为 one-tag、two-tag 或者不设 | one-tag |

3. slot 插槽

   标签文字信息
