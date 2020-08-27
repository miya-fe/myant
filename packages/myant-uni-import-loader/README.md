# uniApp 的小程序组件库按需加载 loader

## 安装

#### NPM

```
npm i @myant/uni-plugin-import -D
```

#### YARN

```
yarn add @myant/uni-plugin-import --dev
```

## 使用

```
{
  chainWebpack: config => {
    // console.log(config.module.rule('vue').use('@myant/uni-plugin-import'))
    config.module.rule('vue')
      .test(/\.vue$/)
      .use('@myant/uni-plugin-import')
      .loader('@myant/uni-plugin-import')
      .tap(options => {
        return {
          ...options,
          libraryName: 'uni-component',
        }
      })
  },
}

```

## options 参数说明

libraryName

```text
类型：string
必须：是
默认值：无
说明：组件库名称
```

libraryDirectory

```text
类型：string
必须：否
默认值：lib
说明：指定的文件路径
```

customName

```text
类型：function 参数：具体的组件名称
必须：否
默认值：无
说明：自定义方法的方式，组装具体组件的文件目录
```

## 说明

该包为 webpack 的自定义 loader，该 loader 的机制采用正则表达是匹配通过 import 引入目标组件，然后组装为完整的组件引用路径，最后交由 uniApp 打包

正则表达式：

```text
/import\\s+\\{[^\\}]+\\}\\s+from\\s+[\\'|\\"]${options.libraryName}[\\'|\\"]/g
```

根据 loader 目前的机制，请自行避坑。eg: 写了一段其它无须转换，但符合上述正则表达式匹配的代码

---
