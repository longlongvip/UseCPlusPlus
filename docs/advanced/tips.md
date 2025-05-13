# 应知应会 C++ 小技巧

## 交换两个变量

```cpp
#include <utility>

std::swap(a, b);

```

## 安全地分配一段内存空间


## 天花板除法
```cpp
template<typename T>
inline T  celi(T a, T b)
{
    return (a + b - 1) / b;
}
```

## map 不该使用 []

应该使用 map.at()

检测元素是否存在可以用 count

```cpp
struct RAIIHandle 
{
    int handle;
    RAIIHandle() {
        handle = CreateObject();
    }
    RAIIHandle(RAIIHandle const &) = delete;
    RAIIHandle &operator=(RAIIHandle const &) = delete;
    RAIIHandle() {
        DeleteObject(handle);
    }
};

```

## 继承构造函数

C++ 特色：子类不会自动继承父类的构造函数！（除非父类的构造函数是没有参数的默认构造函数）
C++11 中可以在子类里面写 using 父类::父类，就能自动继承父类所有的构造函数了。

C++ 98
```cpp
struct Parent {
    Parent(int age, const char *name) { ... }
    void parent_func() { ... }
};

struct Child : Parent {
    Child(int age, const char *name)
        : Parent(age, name)
    { ... }
    void child_func() { ... }
};

Child child(23, "peng");  // 编译通过，调用到子类的构造函数后转发到父类

```

## 提前返回

## 立即调用的 Lambda

## 类内静态成员 inline

## insert 不会替换现有值哦
```cpp
map<string, int> table;
for (auto it = table.begin(); it != table.end(); ) {
    if (it->second < 0) {
        it = table.erase(it);
    } else {
        ++it;
    }
}
```

## 如果不在乎元素的顺序，可以把要删除的元素和最后一个元素 swap，然后 pop_back。复杂度：O(1)
