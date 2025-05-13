# C++ 命名风格

## 基本

- 4 个空格
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