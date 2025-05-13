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
