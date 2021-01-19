module.exports = {
  extends: ['@commitlint/config-conventional'],
  'type-empty': [2, 'never'], //type不能为空
  'type-enum': [
    //commit的type类型【提交格式eg:<type>: <subject>】
    2,
    'always',
    [
      'feat', //新特性、需求
      'fix', //修改bug
      'refactor', //修改bug+添加了新功能
      'style', //修改样式
      'chore', //依赖库、工具依赖、配置文件
      'test', //测试
      'perf', //
      'docs' //
    ]
  ],
  'subject-empty': [2, 'never'] //
}
