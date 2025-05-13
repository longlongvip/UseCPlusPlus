# auto

auto 通常只适用于头文件中“就地定义”的 inline 函数，不适合需要“分离 .cpp 文件”的函数

返回类型声明为 auto，可以自动推导返回类型，但总是推导出普通的值类型，绝对不会带有引用或 const 修饰

如果需要返回一个引用，并且希望自动推导引用的类型，可以写 auto &

这里的 auto 还可以带有 const 修饰，例如 auto const & 可以让返回类型变成带有 const 修饰的常引用

其实我们可以都写作 auto &&！让编译器自动根据我们 return 语句的表达式类型，判断返回类型是左还是右引用

```cpp
std::string str;

auto &&getRVRef() { // std::string &&
    return std::move(str);
}

auto &&getRef() { // std::string &
    return str;
}

auto const &getConstRef() { // std::string const &
    return str;
}

```

## 不适合 auto

- 函数参数
- 非静态成员变量
- 无法定义数组
- 无法导出模组