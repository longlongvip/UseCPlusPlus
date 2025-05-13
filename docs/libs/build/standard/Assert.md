# Assert

##概述
`assert()` 是一个宏，原型是 `void assert(int expression)`，如果宏的参数求值结果为非 0 值，则不做任何操作；如果是 0 值，用宽字符打印诊断消息，然后调用 `abort()`。诊断消息包括：
- 源文件名字（在 `stdlib.h `中声明的宏 `__FILE__` 的值）
- 所在的源文件的行号（在 `stdlib.h` 中声明的宏 `__LINE__` 的值）
- 所在的函数名（在 `stdlib.h` 中声明的宏 `__func__` 的值），这是 `C99` 新增的特性
- 求值结果为0的表达式
诊断信息的显示目标依赖于被调用程序的类型。如果是控制台程序，诊断信息显示在 stderr 设备；如果是基于窗口的程序，`assert()` 产生一个 Windows MessageBox 来显示诊断信息。

程序可以屏蔽掉所有的 `assert()` 而无需修改源代码。这只需要在命令行调用C语言的编译器时添加宏定义的命令行选项，定义NDEBUG宏;也可以在源程序程序引入 `<assert.h>` 之前就使用 `#define NDEBUG` 来定义宏。被屏蔽的 `assert()` 甚至不对传递给它的参数表达式求值，因此使用 `assert()` 时其参数表达式不能有副作用（side-effects）。
## 头文件
```cpp
#include <assert>
```

## 例子
```cpp
#include <stdio.h>
#include <assert.h>

int main (void)
{
    FILE *fd;

    fd = fopen ("/home/user/file.txt", "r");
    assert (fd);
    fclose (fd);

    return 0;
}
```
