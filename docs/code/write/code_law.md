# C++编码法则

## 三法则

```cpp
class X
{
    public:
        X(const X& Other) : x_(Other.x_) { }

        X& operator=(const X& Other)
        {
            if (this == &Other)
            {
                return *this;
            }
            x_ = Other.x_;
        }

        ~X();
    
    private:
        int x_;
}
```

## 五法则

```cpp
class X
{
    public:
        X(const X& Other) : x_(Other.x_) { }
        X(X&&)

        X& operator=(const X& Other)
        {
            if (this == &Other)
            {
                return *this;
            }
            x_ = Other.x_;
        }

        X& operator=(XX& Other)
       
        ~X();
    
    private:
        int x_;
}
```

## 零之法则

```cpp
class X
{
    public：
        X(const X& x) : x_(x) {}

    private：
        int x_;
}
```

## 禁用 copy-ctor/assign operator

```cpp
class NonCopyable
{
 public:
  NonCopyable(const NonCopyable&) = delete;
  void operator=(const NonCopyable&) = delete;

 protected:
  NonCopyable() = default;
  ~NonCopyable() = default;
};
```

## 空指针

使用 `nullptr` 表示空指针

## 缩进

4 个空格

## 括号位置

新行

## 警告最低限度

-Wall 3

## 使用自动勾线系统

## 使用版本控制系统

## 正确、简单和清晰

- 机器永远是对的
- 未经测试的代码永远是错的
- 程序必须为阅读它的人而编写，只是顺便用于机器执行
- 让正确的程序更快，比让更快的程序正确，要容易的多得多
- 你的常量可能是别人的变量
- 

## 优先使用线性或者更好的算法

## 积极使用 const

## 变量

- 尽可能使用局部变量
- 总是初始化变量

## 编译

- 头文件自给自足，不要包含不必要的文件
- 如果前向声明，就不要包含头文件
- 尽量避免循环依赖
- 