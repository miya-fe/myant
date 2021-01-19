### avatar 进度条的使用方法

1. 基础使用：

   ```vue
   <template>
     <my-avatar size="huge" src="http://hh-oss-picture.miyapay.com/box/94dc6578bb06b89a2ab95910a4966ba6.png"></my-avatar>
   </template>
   ```

2. props 参数：

   | 字段 | 类型   | 含义                                                      |
   | ---- | ------ | --------------------------------------------------------- |
   | src  | String | 头像图片链接地址(必填)                                    |
   | size | String | 头像尺寸，可选值 'huge', 'large', 'middle'(默认), 'small' |
