---
# -  可用主题列表 juejin (默认主题)  github  smartblue cyanosis channing-cyan
# -  代码高亮推荐 -   vs2015 （懂的都懂，不懂的我也不说了🤣） vs （白底） atom-one-dark （atom 用过的同学都懂） atom-one-dark-reasonable （问就是强化版） monokai-sublime （顾名思义 sublime）gradient-dark （瞎眼两件套-暗黑 `慎用`）gradient-light （瞎眼两件套-光明 `慎用`）
theme: channing-cyan
highlight: atom-one-dark
title: Git代码提交规范
date: 2022-04-01
tags: 
  - Git
author: xiwang
location: Taipei 
description: Git代码提交规范
lang: zh-CN
metaTitle: Git代码提交规范
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

## 1、Header

Header的部分只有一行,包括三个字段: type(必需), scope(可选), subject(必需)

对应到idea插件上图的配置分别为 Header部分的:

| type(必需)        | Type of change           | commit类别        |
| ----------------- | ------------------------ | ----------------- |
| **scope(可选)**   | **Scope of this change** | commint影响的范围 |
| subject(必需)**** | **Short description**    | 简短的描述        |

### 1.1 type

type用于说明 commit 的类别，只允许使用下面标识

- .[feat]：新功能（feature）

- .[fix]：修补bug

- .[docs]：文档（documentation）

- .[style]： 格式（不影响代码运行的变动,空格,格式化,等等）

- .[refactor]：重构（即不是新增功能，也不是修改bug的代码变动）  [REF]

- .[perf]: 性能 "提高代码性能的改变"

- .[test]：增加测试或者修改测试

- .[build]: 影响构建系统或外部依赖项的更改(maven,gradle,npm 等等)

- .[ci]: 对CI配置文件和脚本的更改

- .[chore]：对非 src 和 test 目录的修改

- .[revert]: Revert a commit (恢复)

### 1.2 scope

`scope`用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

### 1.3 subject

`subject`是 commit 目的的简短描述，不超过50个字符。

```txt
以动词开头，使用第一人称现在时，比如change，而不是changed或changes
第一个字母小写
结尾不加句号（.）
```

## 2、Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

```txt
如有必要，更详细的说明文本。包装它
大概72个字左右。
后面的段落在空行之后。
-要点也可以
-使用悬挂缩进
```

有一个注意点。

（1）应该说明代码变动的动机，以及与以前行为的对比。

## 3、Footer

Footer 部分只用于两种情况。

**（1）不兼容变动**

如果当前代码与上一个版本不兼容，则 Footer 部分以`BREAKING CHANGE`开头，后面是对变动的描述、以及变动理由和迁移方法。

**（2）关闭 Issue**

如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

```txt
Closes #234
```

也可以一次关闭多个 issue 。

```txt
Closes #123, #245, #992
```

最后, 一个完整的commit message示例可能如下:

```js
[FIX](网关模块):修改登陆超市问题
修改用户名加密方法
增加缓存
BREAKING CHANGE: 用户名密码加密修改, 不兼容老版本
Closes 37285
```


<!-- 
![img](https://upload-images.jianshu.io/upload_images/5328791-fa72d2874a0fea2e?imageMogr2/auto-orient/strip|imageView2/2/format/webp) -->