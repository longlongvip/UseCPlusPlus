# 断言

C++ 语言支持可帮助你调试应用程序的三个错误处理机制：`#error` 指令、`static_assert` 关键字和 `assert Macro`, `_assert`, `_wassert` 宏。 所有的三种机制都会发出错误消息，其中两个还会测试软件断言。 软件断言指定在程序的某个特定点应满足的条件。 如果编译时断言失败，编译器将发出诊断消息和编译错误。 如果运行时断言失败，操作系统将发出诊断消息并关闭应用程序

断言，是宏，而非函数。`assert` 宏的原型定义在 `C` 和 `C++` 中，其作用是如果它的条件返回错误，则终止程序执行。可以通过定义 `NDEBUG` 来关闭 `assert`，但是需要在源代码的开头，`include` 之前

```cpp
#include <stdio.h> 
#include <assert.h> 

int main() 
{ 
    int x = 7; 

    /*  Some big code in between and let's say x  
    is accidentally changed to 9  */
    x = 9; 

    // Programmer assumes x to be 7 in rest of the code 
    assert(x==7); 

    /* Rest of the code */

    return 0; 
} 
```

输出：

```cpp
assert: assert.c:13: main: Assertion `x==7` failed.
```

## 断言与正常错误处理

断言主要用于检查逻辑上不可能的情况。例如，它们可用于检查代码在开始运行之前所期望的状态，或者在运行完成后检查状态。与正常的错误处理不同，断言通常在运行时被禁用。

忽略断言：
在代码开头加上：

```cpp
#define NDEBUG          // 加上这行，则 assert 不可用
```

应用程序的生存期由预处理、编译和运行时阶段组成。 每个错误处理机制都会访问在这三个阶段之一中可用的调试信息。 若要有效地调试，请选择提供有关该阶段的相应信息的机制

- `#error` 在预处理时有效。 它将无条件地发出用户指定的消息并导致编译因错误而失败。 该消息可包含由预处理器指令操作的文本，但不会计算任何生成的表达式
- `static_assert` 声明在编译时有效。 它将测试由用户指定且可以转换为布尔值的整数表达式表示的软件断言。 如果表达式的计算结果为零或 `false`，编译器将发出用户指定的消息，并且编译因错误而失败
- `assert Macro`, `_assert`, `_wassert` 宏在运行时有效。 它会计算用户指定的表达式，如果结果为零，系统将发出诊断消息并关闭应用程序。 很多其他宏（如 `_ASSERT` 和 `_ASSERTE`）与此宏类似，但它们发出不同的系统定义或用户定义的诊断消息

## static_assert

在编译时测试软件断言。 如果指定的常量表达式为 false，则编译器显示指定的消息（如果提供了消息），并且编译失败，错误为 C2338；否则，声明无效

```cpp
static_assert( constant-expression, string-literal );
static_assert( constant-expression ); // C++17 (Visual Studio 2017 and later) string-literal 参数是可选的
```

参数：

- `constant-expression`：一个常量表达式，其计算结果为 true 或 false。 表达式可以包含任何类型的常量表达式，包括整数、枚举、指针、引用和函数调用
- `string-literal`：可选。 要显示的消息，用于指示断言失败的原因, 消息必须是字符串文本

`static_assert` 声明对调试模板尤其有用，因为模板自变量可包含在 `constant-expression` 中

## `_ASSERT`、`_ASSERTE`、`_ASSERT_EXPR` 宏

```cpp
_ASSERT_EXPR( booleanExpression, message );
_ASSERT( booleanExpression );
_ASSERTE( booleanExpression );
```

`_ASSERT_EXPR`、`_ASSERT` 和 `_ASSERTE` 会计算其 booleanExpression 参数，在结果为 false (0) 时，它们会输出诊断消息并调用 `_CrtDbgReportW` 以生成调试报告。 `_ASSERT` 宏会输出简单的诊断消息，`_ASSERTE` 会在消息中包含失败表达式的字符串表示形式，而 `_ASSERT_EXPR` 会在诊断消息中包含 message 字符串。 这些宏在 booleanExpression 的计算结果不为零时不执行任何操作
