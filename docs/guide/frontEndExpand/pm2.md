---
# -  可用主题列表 juejin (默认主题)  github  smartblue cyanosis channing-cyan
# -  代码高亮推荐 -   vs2015 （懂的都懂，不懂的我也不说了🤣） vs （白底） atom-one-dark （atom 用过的同学都懂） atom-one-dark-reasonable （问就是强化版） monokai-sublime （顾名思义 sublime）gradient-dark （瞎眼两件套-暗黑 `慎用`）gradient-light （瞎眼两件套-光明 `慎用`）
theme: channing-cyan
highlight: atom-one-dark
title: PM2
date: 2022-04-01
tags: 
  - JavaScript
  - NodeJs
author: xiwang
location: Taipei 
description: PM2
lang: zh-CN
metaTitle: PM2
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

[node项目部署正常启动后不能访问的问题](https://www.cnblogs.com/goloving/p/13523722.html)

　　node项目部署之后，发现访问不了，pm2 list也是正常的，vue项目都可以正常访问，就是请求后台nodejs的时候就报404。

　　原以为是pm2的问题，先停了pm2，用node app.js的方式运行后端代码，项目能正常启动但是依然无法访问

原因：后端运行端口未放行
1、检查ecs的安全组规则，node项目端口3000、8888是否放行


2、确认node正常运行

> 输入命令：ps -aux | grep node

3、检查端口情况

> 输入命令查看端口情况：netstat -anp | grep 8888

4、检查服务器是否开启了防护墙

> 查看规则链：iptables -L -n

5、放行3000、8888端口，之后便可正常访问

> 命令：iptables -I INPUT -p tcp --dport 3000 -j ACCEPT

其他情况：
　　还有别的情况就是node项目启动后连接终端挂了，所以访问不了，进程也占了，端口也占了。

1、查看哪个进程占用了7002端口：
> netstat -tunlp | grep 7002

2、首先把占用 7002 端口的进程终止。

>  输入命令：kill -s 9 14258     （其中-s 9 制定了传递给进程的信号是９，即强制、尽快终止进程。各个终止信号及其作用见附录。）

　　把node项目用 7002 端口启动即可。
　　
> pm2 start preject 启动项目

> pm2 list 查看启动的应用

> pm2 show preject 查看详细信息

> pm2 logs 查看当前信息

> pm2 stop preject 停止preject

> pm2 delete preject 删除preject