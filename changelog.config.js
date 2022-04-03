// changelog 配置，commit 规则也在这里进行配置
// 参考文档：https://www.npmjs.com/package/git-cz

module.exports = {
  disableEmoji: false,
  // format: '{type}{scope}: {emoji}{subject}',
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'build',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    chore: {
      description: '一些与主要业务无关的构建/工程依赖/工具等功能改动',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: '对 CI 配置文件和脚本的更改',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: '文档更新(如：README)',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '新增产品功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: '修复 bug',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '性能优化',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '重构代码。不包括 bug 修复、功能新增',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: '不改变代码功能的变动(如删除空格、格式化、去掉末尾分号等)',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '添加、修改测试用',
      emoji: '💍',
      value: 'test',
    },
    build: {
      description: '构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置',
      emoji: '👷‍',
      value: 'build',
    },
  },
}
