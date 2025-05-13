# 函数

## 函数声明

- 返回值为空的函数声明
函数可以没有返回值，只需要声明函数时返回类型声明为 void 即可，调用这样的函数只是为了他的副作用（如修改全局变量，输出文本到控制台，修改引用参数等）

- 返回值不为空的函数声明
对于返回类型不为 void 的函数，必须写 return 语句，如果漏写，会出现可怕的未定义行为, 编译器不一定会报错，而是到运行时才出现崩溃等现象。建议 GCC 用户开启 -Werror=return-type 让编译器在编译时就检测此类错误，MSVC 则是开启 /we4716，但有两个例外：1. main 函数是特殊的可以不写 return 语句，默认会自动帮你 return 0;。2. 具有 co_return 或 co_await 的协程函数可以不写 return 语句。

- constexpr，指示函数的返回值是常量值，可以在编译时进行计算, constexpr 函数通常比常规函数执行速度更快
- 其链接规范，extern 或 static
- 其链接规范，extern 或 static
- inline，指示编译器将对函数的每个调用替换为函数代码本身。 在某个函数快速执行并且在性能关键代码段中重复调用的情况下，内联可以帮助提高性能
- noexcept 表达式，指定函数是否可以引发异常
- （仅限成员函数）cv 限定符，指定函数是 const 还是 volatile
- （仅限成员函数）virtual、override 或 final。 virtual指定可以在派生类中重写函数。 override 表示派生类中的函数在重写虚函数。 final表示函数不能在任何进一步的派生类中进行重写
- （仅限成员函数）应用于成员函数的static表示函数不与类的任何对象实例关联
- （仅限非静态成员函数）ref 限定符，向编译器指定隐式对象参数 (*this) 是右值引用与左值引用时要选择的函数重载
- const, 成员函数声明为const以指定该函数不允许更改类中任何数据成员的值。 通过将成员函数声明为 const，可以帮助编译器强制执行 const-correctness。 如果有人错误地尝试使用声明为 const 的函数来修改对象，则会引发编译器错误
- 可将函数声明为返回引用类型，返回的信息是一个返回引用比返回副本更有效的足够大的对象，函数的类型必须为左值，引用的对象在函数返回时不会超出范围
- 如果在局部范围中声明某个对象，则该对象会在函数返回时销毁。 如果函数返回对该对象的引用，则当调用方尝试使用 null 引用时，该引用可能会在运行时导致访问冲突

## 函数形参和实参

默认情况下，参数通过值传递给函数，这意味着函数会收到所传递的对象的副本。 对于大型对象，创建副本可能成本高昂，并非始终必要。 若要使自变量通过引用（特别是左值引用）进行传递，请向参数添加引用限定符：

```cpp
void func(int &x); // x is passed by reference
```

当函数修改通过引用传递的参数时，它会修改原始对象，而不是本地副本。 若要防止函数修改这类实参，请将形参限定为 const&：

```cpp
void func(const int &x); // x is passed by const reference
```

若要显式处理通过右值引用或通过左值引用传递的自变量，请对参数使用双与号以指示通用引用

函数签名中的最后一个或几个参数可能会分配有默认自变量，这意味着调用方可能会在调用函数时省略自变量（除非要指定某个其他值）

如果函数声明中最后一个成员是省略号 (...)，则函数声明可采用数量可变的自变量。 在这些情况下，C++ 只为显式声明的自变量提供类型检查。 即使参数的数量和类型是可变的，在需要使函数泛化时也可使用变量参数列表
若要访问声明后的自变量，请使用包含在标准包含文件 <stdarg.h> 中的宏

```cpp
// variable_argument_lists.cpp
#include <stdio.h>
#include <stdarg.h>

//  Declaration, but not definition, of ShowVar.
void ShowVar( char *szTypes, ... );
int main() {
   ShowVar( "fcsi", 32.4f, 'a', "Test string", 4 );
}

//  ShowVar takes a format string of the form
//   "ifcs", where each character specifies the
//   type of the argument in that position.
//
//  i = int
//  f = float
//  c = char
//  s = string (char *)
//
//  Following the format specification is a variable
//  list of arguments. Each argument corresponds to
//  a format character in the format string to which
// the szTypes parameter points
void ShowVar( char *szTypes, ... ) {
   va_list vl;
   int i;

   //  szTypes is the last argument specified; you must access
   //  all others using the variable-argument macros.
   va_start( vl, szTypes );

   // Step through the list.
   for( i = 0; szTypes[i] != '\0'; ++i ) {
      union Printable_t {
         int     i;
         float   f;
         char    c;
         char   *s;
      } Printable;

      switch( szTypes[i] ) {   // Type to expect.
         case 'i':
            Printable.i = va_arg( vl, int );
            printf_s( "%i\n", Printable.i );
         break;

         case 'f':
             Printable.f = va_arg( vl, double );
             printf_s( "%f\n", Printable.f );
         break;

         case 'c':
             Printable.c = va_arg( vl, char );
             printf_s( "%c\n", Printable.c );
         break;

         case 's':
             Printable.s = va_arg( vl, char * );
             printf_s( "%s\n", Printable.s );
         break;

         default:
         break;
      }
   }
   va_end( vl );
}
//Output:
// 32.400002
// a
// Test string
```

在访问任何变量参数前，必须建立一个列表标记作为类型 va_list 的变量。 在前面的示例中，该标记称为 vl。
使用 va_arg 宏访问各个参数。 必须告知 va_arg 宏要检索的参数的类型，以便它可以从堆栈中传输正确的字节数。 如果为 va_arg 指定的大小的类型与通过调用程序提供的类型不同，则结果是不可预知的。
应将使用 va_arg 宏获取的结果显式强制转换为所需类型。
必须调用宏以终止可变自变量处理。va_end

## 函数返回

函数可能不会返回另一个函数或内置数组；但是，它可以返回指向这些类型的指针，或生成函数对象的 lambda。 除了这些情况，函数可以返回处于范围内的任何类型的值，或者它可以返回任何值（在这种情况下返回类型是 void）

“普通”返回类型位于函数签名左侧。 结尾返回类型位于签名的最右侧，前面带有->运算符。 当返回值的类型取决于模板参数时，结尾返回类型在函数模板中尤其有用

## 函数局部变量

在函数主体内声明的变量称为局部变量。 非静态局部变量仅在函数体中可见，如果它们在堆栈上声明，会在函数退出时超出范围。 构造局部变量并通过值返回它时，编译器通常可以执行所谓的返回值优化以避免不必要的复制操作。 如果通过引用返回局部变量，则编译器会发出警告，因为调用方为使用该引用而进行的任何尝试会在局部变量已销毁之后进行。

在 C++ 中，局部变量可以声明为静态。 变量仅在函数体中可见，但是对于函数的所有实例，存在变量的单个副本。 局部静态对象将在 atexit 指定的终止期间销毁。 如果某个静态对象由于程序的控制流跳过了其声明而未构造，不会尝试销毁该对象

在 C++14 中，可以使用 auto 指示编译器从函数体推断返回类型，而不必提供结尾返回类型。 请注意，auto 始终推导为按值返回。 使用 auto&& 可指示编译器推导引用

请注意，auto不会保留它推导的类型的常量性。 对于返回值需要保留其自变量的常量性或引用性的转发函数，可以使用 decltype(auto) 关键字，该关键字使用 decltype 类型推断规则并保留所有类型信息。 decltype(auto)可以用作左侧的普通返回值，或结尾返回值

从函数返回多个值：

- 将值封装在命名类或结构对象中。 要求类或结构定义对调用方可见
- 返回 std::tuple 或 std::pair 对象
- 使用结构化绑定。 结构化绑定的优点是，存储返回值的变量在声明的同时被初始化，在某些情况下，这可以显著提高效率

除了使用返回值本身之外，还可以通过定义任意数量的参数来“返回”值以使用“按引用传递”，以便函数可以修改或初始化调用方提供的对象的值

## 函数指针

C++ 通过与 C 语言相同的方式支持函数指针。 但是更加类型安全的替代方法通常是使用函数对象

建议使用typedef声明函数指针类型的别名（如果声明返回函数指针类型的函数）。 例如

```cpp
typedef int (*fp)(int);
fp myFunction(char* s); // function returning function pointer
```

## 函数重载

C++ 允许在同一范围内指定多个同名函数。 这些函数称为重载函数或重载。 利用重载函数，你可以根据参数的类型和数量为函数提供不同的语义

以采用 std::string 参数的 print 函数为例。 此函数执行的任务可能与采用 double 类型参数的函数大不相同。 通过重载，不必使用诸如 print_string 或 print_double 之类的名称。 在编译时，编译器会根据调用方传入的参数类型和数量选择要使用的重载。 如果你调用 print(42.0)，则会调用 void print(double d) 函数。 如果你调用 print("hello world")，则会调用 void print(std::string) 重载。

可以重载成员函数和自由函数。 下表显示了 C++ 使用函数声明的哪些部分来区分同一范围内具有相同名称的函数组

| 函数声明元素                 | 是否可以重载 |
|--------------------------|-------------|
| 返回类型                     | 否           |
| 参数数量                     | 是           |
| 参数类型                     | 是           |
| 省略号存在或缺失             | 是           |
| const 或 volatile 存在或缺失 | 是           |
| typedef 名称的使用           | 否           |
| 引用限定符存在或缺失         | 是           |
| 函数是否为成员函数           | 是           |

## 函数对象

函数对象（也称 函子）是实现 operator() 的任何类型。 此运算符被称为 调用运算符 （有时称为 应用程序运算符）。 C++ 标准库主要使用函数对象作为容器和算法内的排序条件

相对于直接函数调用，函数对象有两个优势。 第一个是函数对象可包含状态。 第二个是函数对象是一个类型，因此可用作模板参数

- 创建函数对象

若要创建函数对象，请创建一个类型并实现 operator()，例如：

```cpp
class Functor
{
public:
    int operator()(int a, int b)
    {
        return a < b;
    }
};

int main()
{
    Functor f;
    int a = 5;
    int b = 7;
    int ans = f(a, b);
}
```

main 函数的最后一行显示了函数对象的调用方式。 此调用看起来像是对函数的调用，但实际上它调用的是函子类型的 operator()。 调用函数对象和函数之间的相似性在于生成术语函数对象的方式

- 函数对象和容器

C++ 标准库包含 <functional> 头文件中的多个函数对象。 这些函数对象的一个用途是用作容器的排序条件。 例如， set 容器声明如下

```cpp
template<
    class Key,
    class Compare = less<Key>,
    class Allocator = allocator<Key>> class set;
```

第二个模板函数是函数对象 less。 如果第一个参数小于第二个参数，则此函数对象返回 true。 因为某些容器对其元素进行排序，所以容器需要一种方法来比较两个元素。 该比较通过使用函数对象执行。 你可以创建函数对象并在容器的模板列表中指定它，从而定义你自己的排序条件

- 函数对象和算法

函数对象的另一个用法是在算法中。 例如， remove_if 算法声明如下：

```cpp
template <class ForwardIterator, class Predicate>
ForwardIterator remove_if(
    ForwardIterator first,
    ForwardIterator last,
    Predicate pred);
```

remove_if 的最后一个参数是返回布尔值（一个 谓词）的函数对象。 如果函数对象的结果是 true，则从迭代器 first 和 last正在访问的容器中删除元素。 可以使用在 pred 参数的 <functional> 标头中声明的任何函数对象，也可以自行创建
