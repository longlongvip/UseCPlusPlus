# const

## 含义

常类型是指使用类型修饰符 `const` 说明的类型，常类型的变量或对象的值是不能被更新的

## 作用

- 定义常量

```cpp
const int sex = 1;
```

- 类型检查
  `const` 常量具有类型，编译器可以进行安全检查；`#define` 宏定义没有数据类型，只是简单的字符串替换，不能进行安全检查
- 防止修改，起保护作用，增加程序健壮性

```cpp
void sex_level(const int x)
{
    sex = x;
}
```

- 可以节省空间，避免不必要的内存分配
  `const` 定义常量从汇编的角度来看，只是给出了对应的内存地址，而不是像 `#define` 一样给出的是立即数，所以，`const` 定义的常量在程序运行过程中只有一份拷贝，而 `#define` 定义的常量在内存中有若干个拷贝

## 对象默认为文件局部变量

- 未被 `const` 修饰的变量在不同文件的访问

```cpp
// 1.cpp
int ext = 1;
// main.cpp
extern int ext;
int main()
{
    std::cout << ext + 1 << std::endl;
}
```

- 被 `const` 修饰的变量在不同文件的访问

```cpp
// 1.cpp
extern const int ext=2;
// main.cpp
const extern int ext;
int main()
{
    std::cout << ext + 1 << std::endl;
}
```

## 定义常量

```cpp
const sex = 1; // sex 为常量，必须进行初始化
sex = 2; // 错误，sex 为常量，无法修改
```

## 指针与 const

```cpp
const char* sex; // 指向 const 对象的指针或者说指向常量的指针
char const* sex; // 同上
char* const sex; // 指向类型对象的 const 指针。或者说常指针、const指针
const char* const sex; // 指向 const 对象的 const 指针

/* 允许把非const对象的地址赋给指向const对象的指针 */
const int* sex;
int sex_v = 1;
sex = &sex_v;

```

- 常指针
  `const` 指针必须进行初始化，且const指针的值不能修改
- 指向常量的常指针

## 函数与 const
