# 代码风格

## 基本

- 版权信息

```cpp
// Copyright X Studio, Inc. All Rights Reserved.
```

- 头文件 X.h：

```cpp
#pragma once

/*
 * @file X.h
 * @brief
 * @creater
 * @date
 */

/* 标准 C 库 */

/* 系统 C 库 */

/* 第三方 C 库 */

/* 项目 库 */

```

- 源文件 X.cpp：

```cpp
#include "X.h"

```

- 缩写：4 个空格
- `{` 新行

## 命名空间

- 命名空间：UpperCamelCase

## 类和结构体

类 UpperCamelCase
结构体 UpperCamelCase

## 宏

宏 all_lower

## 函数

一般函数 all_lower
公有成员函数
私有成员函数
保护成员函数
虚函数
回调和事件处理函数

## 常量

常量 ALL_UPPER

## 变量

局部变量：all_lower
全局变量：g_all_lower
静态变量：s_all_lower
静态全局变量：sg_all_lower
类成员变量：all_lower_
类静态成员变量：s_all_lower_
进程间共享全局变量：gg_

## 类型

```cpp
bool, BOOL: b
char, TCHAR: ch
char[]: sz #string zero
string, CString: str
LPSTR: lpsz
LPCSTR: lpcsz
LPCTSTR: lptsz
int: n
short: s
unsigned int: un
long: l
float: f
double: d
BYTE: by
WORD: w
DWORD: dw
* : p
handle: h
Array: arr
struct: t
enum: em
union: uni
vector: vec
rect: rc
color: cr
DC: dc
MFC control: CONTROL_className, 如CListCtrl m_LC_Name
```

## 注释

- 编写含义清晰的代码
- 编写有用的注释
- 不要对低质量代码进行注释——重新编写这些代码
- 不要让代码与注释自相矛盾
