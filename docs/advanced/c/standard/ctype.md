# ctype
## 概述
ctype.h 是 C 标准函数库中的头文件，定义了一些 C 语言字符分类函数，用于测试字符是否属于特定的字符类别，如字母字符、控制字符等等。既支持单字节字符，也支持宽字符

## 操作
| 单字节 | 宽字节 | 描述 |
|:--------:|:---------:|:------------:|
| isalnum  | iswalnum  | 是否为字母数字 |
| isalpha  | iswalpha  | 是否为字母 |
| islower  | iswlower  | 是否为小写字母 |
| isupper  | iswupper  | 是否为大写字母 |
| isdigit  | iswdigit  | 是否为数字 |
| isxdigit | iswxdigit | 是否为16进制数字 |
| iscntrl  | iswcntrl  | 是否为控制字符 |
| isgraph  | iswgraph  | 是否为图形字符（例如，空格、控制字符都不是） |
| isspace  | iswspace  | 是否为空格字符（包括制表符、回车符、换行符等） |
| isblank  | iswblank  | 是否为空白字符 (C99/C++11新增)（包括水平制表符） |
| isprint  | isprint   | 是否为可打印字符 |
| ispunct  | iswpunct  | 是否为标点 |
| tolower  | towlower  | 转换为小写 |
| toupper  | towupper  | 转换为大写 |

## 来源
https://zh.wikipedia.org/wiki/Ctype.h
