---
# -  可用主题列表 juejin (默认主题)  github  smartblue cyanosis channing-cyan
# -  代码高亮推荐 -   vs2015 （懂的都懂，不懂的我也不说了🤣） vs （白底） atom-one-dark （atom 用过的同学都懂） atom-one-dark-reasonable （问就是强化版） monokai-sublime （顾名思义 sublime）gradient-dark （瞎眼两件套-暗黑 `慎用`）gradient-light （瞎眼两件套-光明 `慎用`）
theme: channing-cyan
highlight: atom-one-dark
title: linux实用指令
date: 2022-05-10
tags: 
  - linux
author: xiwang
location: Taipei 
description: linux实用指令
lang: zh-CN
metaTitle: linux实用指令
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

### 一、常用指令集：

```yaml
  1. cd  ../         cd /home            ##进入指定文件
  2. pwd                                 ##查看完整目录
  3. mkdir file      mkdir/usr/mysql     ##创建空文件夹
  4. ll              ls                  ##查看列表
  5. vi              vim                 ##文件编辑器--如果文件不存在则带创建功能，i进入编辑esc退出编辑然后：加wq保存退出，q!强制退出，q不保存退出
  6. touch redis.conf                    ##创建文件
  7. ctrl+c                              ##中断操作
  8. clear                               ##清屏
  9. rm -f 文件名                         ##强制删除    rm -rf 文件名 用于删除文件夹
 10. cat 文件名                           ##用于查看文件的全部内容
 11. tar xvf 文件名                       ##解压
 12. mv 原文件 新文件位置                  ##用于移动文件位置--另外有重命名功能
 13. lsof -i:端口                         ##查看端口占用情况    
 14. kill -9 pid                          ##杀死端口
 15. cp -r 原文件 新文件位置                ##复制文件
 16. rpm -qa | grep mysql                 ##用于检测是否已安装某个程序
 17. source /etc/profile                  ##用于让配置生效
 18. chmod 777 /home/soft/java/jdk/bin    ##用于赋权  777表示3种用户--文件所有者、群组用户、其他用户；7：读写运行 5：读和运行 4：只读
 19. ps -ef | grep redis                  ##查看后台进程是否运行
 20. netstat -lntp | grep 6379            ##检测6379端口是否在运行   是l不是i
 21. make                                 ##编译
 22. make install PREFIX=/usr/local/redis ##安装在指定目录
 23. wget http://127.0.0.1:8080           ##测试端口
 24. ./mongod -f /etc/mongodb.conf        ##配置文件启动mongodb数据库，先进行安装的bin目录然后执行此命令（先确认配置文件的位置）
 25. find -name mongodb.conf              ##查询当前文件夹下是否有mongodb.conf这个文件 
 
```



### 二、防火墙的相关指令：

```yaml
  1. firewall-cmd --list-ports            ##查看开放的端口集合
  2. firewall-cmd --state                 ##查看防火墙状态
  3. systemctl start firewall             ##开启防火墙
  4. firewall-cmd --zone=public --add-port=6379/tcp --permanent    ##开放端口
  5. firewall-cmd --reload                #重启防火墙
```



### 三、mysql的相关指令

```yaml
/home/soft/redis-3.2.1/bin/redis-server /home/soft/redis-3.2.1/etc/redis.conf
1.启动命令
##（1）.使用 service 启动：service mysqld start
##（2）.使用 mysqld 脚本启动：/etc/inint.d/mysqld start
##（3）.使用 safe_mysqld 启动：safe_mysqld&
2.停止命令
##（1）.使用 service 启动：service mysqld stop
##（2）.使用 mysqld 脚本启动：/etc/inint.d/mysqld stop
##（3）.mysqladmin shutdown
3.重启命令
##（1）.使用 service 启动：service mysqld restart
##（2）.使用 mysqld 脚本启动：/etc/inint.d/mysqld restart
```

###  四、redis安装的相关步骤及指令

```yaml
1.下载相关资源redis-4.0.11.tar.gz
2.解压压缩包  
## tar zxvf redis-4.0.11.tar.gz
3.安装 
## cd redis-4.0.11
## make
## cd src
## make install PREFIX=/usr/local/redis
4.移动配置文件到安装目录
## cd ../
## mkdir /usr/local/redis/etc
## mv redis.conf /usr/local/redis/etc
5.配置redis为后台启动
## vim /usr/local/etc/redis.conf     //将daemonize no 改成daemonize yes     //requirepass 'wtl123'   设置密码
6.设置redis开机启动
## vim /etc/rc.local
## 在里面添加如下内容：--开机会就调用如下命令
## /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf
注：redis启动命令
   ## redis-server /usr/local/redis/etc/redis.conf        
7.启动redis
  ## redis-server
  ## redis-server &            //以后台方式运行
8.检测后台进程是否存在
  ## ps -ef | grep redis
9.检测6379端口是否在监听
  ## netstat -lntp | grep 6379
10.进入客户端
  ##redis-cli    //查询所有key  key *     //set name "admin"      //get name
11.关闭redis
  ## redis-cli shutdown
  ## kill -9 pid
注：如果需要在redis客户端设置密码，则执行以下命令
    ## redis-cli
    ## config get requirepase       //查看密码
    ## config set requirepase 密码   //设置密码
    ## redis-cli -h 127.0.0.1 -p 6379 -a 密码      //设置密码后的启动方式
```

### 五、安装配置jdk

```yaml
1.解压jdk
## tar zxvf jdk-8u181-linux-x64.tar.gz
2.编辑配置环境变量
## vim /etc/profile
## 在尾部添加如下内容
## export JAVA_HOME=/usr/local/jdk/jdk1.8.0_181
## export CLASSPATH=$:CLASSPATH:$JAVA_HOME/lib/ 
## export PATH=$PATH:$JAVA_HOME/bin
3.刷新配置文件
## source /etc/profile
4.检查jdk是否配置成功
## java -version
```

### 六，解包打包

```yaml
打包成tar.gz格式压缩包

# tar -zcvf renwolesshel.tar.gz /renwolesshel
解压tar.gz格式压缩包

# tar zxvf renwolesshel.tar.gz
打包成tar.bz2格式压缩包

# tar -jcvf renwolesshel.tar.bz2 /renwolesshel
解压tar.bz2格式的压缩包

# tar jxvf renwolesshel.tar.bz2
压缩成zip格式

# zip -q -r renwolesshel.zip renwolesshel/
解压zip格式的压缩包

# unzip renwolesshel.zip
```

