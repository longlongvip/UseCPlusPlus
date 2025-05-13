# 指针

指针是 C 语言最重要的概念之一，也是最难理解的概念之一

指针是什么？首先，它是一个值，这个值代表一个内存地址，因此指针相当于指向某个内存地址的路标。 指针在 C 和 C++ 中广泛用于三个主要用途：

- 在堆上分配新对象
- 将函数传递给其他函数
- 循环访问数组或其他数据结构中的元素

在 C 样式编程中，原始指针用于所有这些场景。 但是，原始指针会导致许多严重的编程错误。 因此，强烈建议不要使用它们，除非它们提供了显著的性能优势，并且对于哪个指针是负责删除对象的指针没有歧义
新式 C++ 提供了智能指针用于分配对象，提供了迭代器用于遍历数据结构，还提供了 Lambda 表达式用于传递函数。 通过使用这些语言和库设施，而不是原始指针，可使程序更安全、更易于调试，以及更易于理解和维护

## 指针的声明

```cpp
T* a; // 指向 T 类型变量 a 的指针
T *a, *b; // 同一行声明两个指针变量，那么需要写成下面这样
T** a // 一个指针指向的可能还是指针，这时就要用两个星号**表示
```

## 指针的定义

```cpp
T* a = nullptr; // 指向 T 类型变量 a 的指针, 并初始化为 nullptr
T b = t;
a = &b; // 给指针 a 赋值
```

原始指针是指其生存期不受封装对象控制的指针, 为原始指针分配另一个非指针变量的地址，也可以为其分配 `nullptr` 值。 未分配值的指针包含随机数据

## * 运算符

`*` 这个符号除了表示指针以外，还可以作为运算符，用来取出指针变量所指向的内存地址里面的值
变量地址而不是变量值传入函数，还有一个好处。对于需要大量存储空间的大型变量，复制变量值传入函数，非常浪费时间和空间，不如传入指针来得高效

```cpp
T c = *b; // 解指针
```

## & 运算符

`&` 运算符用来取出一个变量所在的内存地址

## 指针变量的初始化和释放

```cpp
T* a = nullptr;
C* b = new C(); // 类的指针的初始化
delete b; // 类的指针释放
```

指针可以指向类型化对象或指向 void。 当程序在内存中的堆上分配对象时，它会以指针的形式接收该对象的地址。 此类指针称为“拥有指针”。 当不再需要堆分配的对象时，必须使用拥有指针（或其副本）显式释放该对象。 未能释放内存会导致内存泄漏，并使该内存位置无法供计算机上的任何其他程序使用。 必须使用 delete（或 delete[]）释放使用 new 分配的内存

## 算术指针

未声明为 const 的指针可以递增或递减，以指向内存中的另一个位置。 此操作称为“指针算术”。 它用于在 C 风格编程中循环访问数组或其他数据结构中的元素

## 指针算术和数组

指针和数组密切相关。 当数组按值传递给函数时，它将作为指向第一个元素的指针传递。 以下示例演示了指针和数组的以下重要属性：

- `sizeof` 运算符返回数组的总大小（以字节为单位）
- 若要确定元素数目，请将总字节数除以一个元素的大小
- 当数组被传递给函数时，它会衰减为指针类型
- 当 `sizeof` 运算符应用于指针时，它将返回指针大小，例如，x86 上为 4 个字节，x64 上为 8 个字节

某些算术运算可用于非 const 指针，以使其指向另一个内存位置。 指针使用 `++`、`+=`、`-=` 和 `--` 运算符递增和递减。 此方法可用于数组，在非类型化数据的缓冲区中尤其有用
void* 按一个 char 的大小（1 个字节）递增。 类型化指针按其指向的类型的大小递增。

- 指针与整数值的运算，表示指针的移动
- 指针只能与整数值进行加减运算，两个指针进行加法是非法的
- 相同类型的指针允许进行减法运算，返回它们之间的距离，即相隔多少个数据单位
- 指针与指针的比较运算，比较的是各自的内存地址哪一个更大，返回值是整数1（true）或0（false）

## `void*` 指针

指向 void 的指针仅指向原始内存位置。 有时需要使用 void* 指针，例如在 C++ 代码和 C 函数之间传递时

将类型化指针强制转换为 void 指针时，内存位置的内容保持不变。 但是，类型信息会丢失，因此无法执行递增或递减操作。 例如，可以将内存位置从 `MyClass*` 强制转换为 void*，然后再转换回 MyClass*。 此类操作本质上容易出错，需要非常小心以避免错误。 新式 C++ 几乎在所有情况下都不鼓励使用 void 指针

## 指向函数的指针

在 C 风格的编程中，函数指针主要用于将函数传递给其他函数。 此方法使调用方能够在不修改函数的情况下自定义函数的行为。 在新式 C++ 中，lambda 表达式提供了相同的功能，并且提供了更高的类型安全性和其他优势

函数指针声明指定指向函数必须具有的签名：

```cpp
// Declare pointer to any function that...

// ...accepts a string and returns a string
string (*g)(string a);

// has no return value and no parameters
void (*x)();

// ...returns an int and takes three parameters
// of the specified types
int (*i)(int i, string s, double d);
```

以下示例展示了函数 combine，该函数将接受 std::string 并返回 std::string 的任何函数作为参数。 根据传递给 combine 的函数，它将在前面或后面添加字符串。

```cpp
#include <iostream>
#include <string>

using namespace std;

string base {"hello world"};

string append(string s)
{
    return base.append(" ").append(s);
}

string prepend(string s)
{
    return s.append(" ").append(base);
}

string combine(string s, string(*g)(string a))
{
    return (*g)(s);
}

int main()
{
    cout << combine("from MSVC", append) << "\n";
    cout << combine("Good morning and", prepend) << "\n";
}
```

## const 修饰指针

const 关键字指定指针在初始化后无法修改；此后指针将受到保护，防止进行修改
若要将指针指向的对象声明为 const，请使用以下形式的声明：

```cpp
const char* cpX;
```

若要将指针的值（即指针中存储的实际地址）声明为 const 或 volatile，请使用以下形式的声明：

```cpp
char* const cpX;
```

C++ 语言会阻止将允许修改声明为 const 的对象或指针的赋值。 此类赋值会移除用来声明对象或指针的信息，从而违反原始声明的意图

给定类型的 const 指针可以分配给同一类型的指针。 但是，非 const 类型的指针不能赋给 const 指针。 以下代码显示了

```cpp

```

## volatile 修饰指针

volatile 关键字指定与后跟的名称关联的值可由用户应用程序中的操作以外的操作修改。 因此，volatile 关键字对于声明共享内存中可由多个进程访问的对象或用于与中断服务例程通信的全局数据区域很有用
若要将指针指向的对象声明为 volatile，请使用以下形式的声明：

```cpp
volatile char* vpX;
```

若要将指针的值（即指针中存储的实际地址）声明为 const 或 volatile，请使用以下形式的声明：

```cpp
char* volatile vpX;
```

由于存在从 typename * 到 const typename * 的标准转换，因此将 char * 类型的自变量传递到 strcpy_s 是合法的。 但是，反之则不行；不存在从对象或指针中移除 const 特性的隐式转换

## new 和 delete

C++ 支持使用 new 和 delete 运算符动态分配和解除分配对象。 这些运算符为来自称为“自由存储”（也称为“堆”）的池中的对象分配内存。 new 运算符调用特殊函数 operator new，delete 运算符调用特殊函数 operator delete

重复调用 operator new 会返回不同的指针
如果分配请求的内存不足，operator new 会引发 std::bad_alloc 异常

处理内存不足
从 new 表达式中测试失败分配的方式取决于是使用标准异常机制还是使用 nullptr 返回。 标准 C++ 要求分配器引发 std::bad_alloc 或派生自 std::bad_alloc 的类。 可以处理此类异常，如以下示例所示

```cpp
#include <iostream>
#include <new>
using namespace std;
#define BIG_NUMBER 10000000000LL
int main() {
   try {
      int *pI = new int[BIG_NUMBER];
   }
   catch (bad_alloc& ex) {
      cout << "Caught bad_alloc: " << ex.what() << endl;
      return -1;
   }
}
```

使用 nothrow 格式的 new 时，可以测试分配失败，如以下示例所示：

```cpp
#include <iostream>
#include <new>
using namespace std;
#define BIG_NUMBER 10000000000LL
int main() {
   int *pI = new(nothrow) int[BIG_NUMBER];
   if ( pI == nullptr ) {
      cout << "Insufficient memory" << endl;
      return -1;
   }
}
```
