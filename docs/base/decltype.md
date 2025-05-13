# decltype

用来在编译时获取一个表达式的类型

## 基本使用

decltype的语法是:

```cpp
decltype (expression)
```

这里的括号是必不可少的,decltype 的作用是“查询表达式的类型”，因此，上面语句的效果是，返回 expression 表达式的类型。注意，decltype 仅仅“查询”表达式的类型，并不会对表达式进行“求值”。

## 推导出表达式类型

```cpp
int i = 1;
decltype(i) a; //推导结果为int。a的类型为int。
```

## 与using/typedef合用，用于定义类型

```cpp
using size_t = decltype(sizeof(0));//sizeof(a)的返回值为size_t类型
using ptrdiff_t = decltype((int*)0 - (int*)0);
using nullptr_t = decltype(nullptr);
vector<int >vec;
typedef decltype(vec.begin()) vectype;
for (vectype i = vec.begin; i != vec.end(); i++)
{
    //...
}
```

## 重用匿名类型

在C++中，我们有时候会遇上一些匿名类型，如:

```cpp
struct anon_s
{
    int d ;
    doubel b;
};
```

而借助decltype，我们可以重新使用这个匿名的结构体：

```cpp
decltype(anon_s) as ;//定义了一个上面匿名的结构体
```

## 泛型编程中结合auto，用于追踪函数的返回值类型

```cpp
template <typename T>
auto multiply(T x, T y)-> decltype(x*y)
{
    return x*y;
}
```
