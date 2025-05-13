# 声明和定义

## 符号的链接类型 (linkage)

函数和变量，在对外的可见性这方面，有以下几种类型：

外部链接 (ODR external linkage)：对其他翻译单元可见
共享链接 (non-ODR external linkage)
内部链接 (internal linkage)
无链接 (no linkage)

函数和变量的可见性这一属性，被 C++ 官方称为链接（linkage），是因为符号的可见性处理通常是链接器（ld）负责的，不同类型链接（linkage）的效果，在链接（link）的时候才会生效。

定义在全局（名字空间）中的情况：

```cpp
int i;                  // 变量声明并定义为“外部链接”
int f(int x);           // 函数声明为“外部链接”
int f(int x) {}         // 函数声明并定义为“外部链接”

extern int i;           // 变量声明为“外部链接”
extern int f(int x);    // 函数声明为“外部链接”
extern int f(int x) {}  // 函数声明并定义为“外部链接”

inline int i;           // 变量声明并定义为“共享链接”
inline int f(int x);    // 函数声明为“共享链接”
inline int f(int x) {}  // 函数声明并定义为“共享链接”

static int i;           // 变量声明并定义为“内部链接”
static int f(int x);    // 函数声明为“内部链接”
static int f(int x) {}  // 函数声明并定义为“内部链接”

```

定义在类（class）中的情况：
```cpp
struct Class {

int i;                  // 变量声明并定义为“无链接”
int f(int x);           // 函数声明为“外部链接”
int f(int x) {}         // 函数声明并定义为“共享链接”

inline static int i;           // 变量声明并定义为“共享链接”
inline static int f(int x);    // 函数声明为“共享链接”
inline static int f(int x) {}  // 函数声明并定义为“共享链接”

static int i;           // 变量声明并定义为“外部链接”
static int f(int x);    // 函数声明为“外部链接”
static int f(int x) {}  // 函数声明并定义为“外部链接”

};

```
