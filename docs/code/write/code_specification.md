# 代码规范

## 原因

- 软件生命周期中80%的时间皆需要维护
- 原开发者几乎不会对软件进行终身维护
- 代码规范可提高软件可读性，让工程师更加快速透彻地理解新代码
- 如决定向模组社区开发者公开源代码，则源代码需要易于理解
- 交叉编译器兼容性实际上需要此类规则

## 版权

由Epic提供用于分配的源文件（.h、.cpp、.xaml、etc.）必须在文件的首行包含版权声明。版权声明的格式必须严格按照以下形式编写：

```cpp
// Copyright Epic Games, Inc. All Rights Reserved.
```

若此行缺失或格式错误，CIS将生成错误或失败提示

## 命名

- 


## 常量

常量即是文档也是编译器指令，因此应保证所有代码的常量正确
其中包括：

- 若函数不修改参数，常量指针或引用将传递函数参数
- 若方法不修改对象，将方法标记为常量
- 若循环不修改容器，则在容器上使用常量迭代

## 包容性选词

- 种族、民族和宗教包容性
    - 禁止使用会强化刻板印象的暗喻或明喻，这包括将黑白对立的措辞，例如 blacklist / whitelist 
    - 禁止在措辞中提及历史创伤或亲身体验的歧视，这包括 slave 、 master 和 nuke
- 性别包容性
    - 使用代词 they 、 them 和 their 来指称假定当事人，即使是单数也不例外
    - 指称非人事物时，总是使用 it 和 its 。例如：模块、插件、函数、客户端、服务器或其他软件或硬件组件
    - 不要给无性别的事物指定性别
    - 禁止使用诸如 guys 之类呈现性别的集体名词
    - 避免诸如 poor_man 之类包含专断性别的口语短语
- 俚语
    - 请记住，你的措辞会向全球受众呈现，他们熟悉的成语可能不同，对同一件事物有不同的态度，对同一个文化的理解也可能不同
    - 避免俚语和俗语，即使你认为很滑稽或无伤大雅。这些用语对于母语非英语的人来说可能很难理解，也不太好翻译
    - 禁止使用脏话
- 义项太多的词语
    - 对于许多术语，我们只取用了其技术含义，但这些词在非技术语境还有其他用法。例如：abort 、 execute 或 native 。在使用此类词语时，务必精确表达意思，并检查相应上下文
- 词语表
    - 黑名单
        - 替代词：deny list 、 block list 、 exclude list 、 avoid list 、 unapproved list 、 forbidden list 、 permission list
    - Whitelist
        - 替代词：allow list 、 include list 、 trust list 、 safe list 、 prefer list 、 approved list 、 permission list
    - Master
        - 替代词：primary 、 source 、 controller 、 template 、 reference 、 main 、 leader 、 original 、 base
    - Slave
        - 替代词：secondary 、 replica 、 agent 、 follower 、 worker 、 cluster node 、 locked 、 linked 、 synchronized

## C++ 标准库的使用

## C++ 编码法则
