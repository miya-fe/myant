### progress 进度条的使用方法

1. 基础使用：

   ```vue
   <template>
     <my-progress :percent="0.4></my-progress>
   </template>
   ```

2. 传入更多参数：

   ```vue
   <my-progress
     :percent="0.6"
     bgColor="#ccc"
     color="#abc"
     :width="300"
     :height="16"
   >
     <text class="title">已抢2222</text>
   </my-progress>
   ```

   ```scss
   // 自定义
   .title {
     display: inline-block;
     font-size: 20rpx;
     margin-left: 20rpx;
   }
   ```

   ​

3. props参数：

   | 字段    | 类型   | 含义               |
   | ------- | ------ | ------------------ |
   | percent | Number | 内部进度比例       |
   | width   | Number | 进度条总长度       |
   | height  | Number | 进度条高度         |
   | bgColor | String | 外部背景进度条颜色 |
   | color   | String | 内部进度条颜色     |

4. slot插槽

   在进度条右侧显示相关文字信息