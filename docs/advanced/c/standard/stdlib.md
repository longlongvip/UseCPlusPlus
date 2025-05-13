# stdlib
## 概述
stdlib.h 是 C 标准函数库的头文件，声明了数值与字符串转换函数, 伪随机数生成函数, 动态内存分配函数, 进程控制函数等公共函数。 C++ 程序应调用等价的 cstdlib 头文件

## 常量
| 名字 | 值 | 说明 |
| :--: | :--: | :--: |
| NULL | 0，0L，(void*)0 | 表示空指针常量的宏; 换句话说，一个常量用来表示一个总是指向无效的内存地址的指针值 |
| EXIT_FAILURE | 一个非0值 | 用来指示程序失败的结束，一般用于exit() |
| EXIT_SUCCESS | 0 | 用来指示程序成功的结束，一般用于exit() |
| RAND_MAX | >= 32767 | 函数rand()所能返回的最大的值 |
| MB_CUR_MAX | | 当前locale中多字节字符的最大字节数目 |

## 数据类型
| 名字 | 说明 |
| :--: | :--: |
| size_t | sizeof 返回结果的数据类型，实际上是无符号整型 |
| div_t ， ldiv_t，lldiv_t | 函数div, ldiv, lldiv的返回结果的数据类型，实际上是包含两个整数的结构类型 |

## 函数
| 名字 | 描述 |
| :--: | :--:|
| 类型转换 |
| atof |  |
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 
| atof |  | 

## 来源
https://zh.wikipedia.org/wiki/Stdlib.h
