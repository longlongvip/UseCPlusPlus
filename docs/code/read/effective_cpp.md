# Effective C++

## 视C++为一个语言联邦

- C 语言：C++的基础，区块、语句、预处理器、内置数据类型、数组和指针等特性都来自C
- Object-Oriented C++：面向对象编程的特性，主要包括类、封装、继承、多态和virtual函数（动态绑定）等
- Template C++：泛型编程（generic programing）的特性，带来了模板元编程（template metaprogramming，TMP）
- STL（Standard Template Library，标准模板库）：template程序库，其封装了容器（containers）、迭代器（iterators）、算法（algorithms）和函数对象（function objects）等

## 尽量以const，enum，inline替换 #define

## 尽可能使用const

关于const指针的用法，遵循以下规则：与类型位置无关，仅看const与星号的相对位置。如果const在星号左侧，表示指针所指内容为常量；如果const在星号右侧，表示指针本身是常量；如果出现在星号两侧，表示被指内容和指针都是常量

- const 成员函数不可以修改对象内容，即可以用来规定类的哪些方法是具有只读属性的，比如一些Get方法
- const 成员函数为操作const对象提供手段。怎么理解呢？const对象本身应当是不变的，这时const对象调用了一个非const成员函数就显得很奇怪，因为默认非const成员函数是可以修改对象内容的。所以，如果对象是常量，则只能调用其const 成员函数
- 两个成员函数如果只是常量性不同，也是可以被重载的
- 但其实const 成员函数并不能严格的检测到不可以修改对象内容的行为，比如一些Get方法返回了成员的非const引用时，只读属性就会失控
- 如果真的需要在const 成员函数中修改对象的成员（当然你也知道这些修改操作是合理的）的时候，可以给需要修改的成员加上mutable（可变的）关键字，mutable会释放掉非static成员变量的常量性约束

如前所述，两个成员函数如果只是常量性不同，也是可以被重载的。即便函数体内的操作是相同的，你也需要为此重复两次，如下：

这显然是不太合理的，尤其是在函数体比较长的时候，显得非常蠢（再对函数体封装一层，然后调用也不够优雅），那如何规避呢？可以通过让非const成员函数调用其同名（重载）的const成员函数的方式来解决。如下：

```cpp
class TextBlock{
public:
    ...
    const char& operator[](std::size_t position) const {
        ...	// 边界检查
        ... // log数据访问
        ... // 检查数据完整性
        return text[position];
    }
    char& operator[](std::size_t position) {
        ...	// 边界检查
        ... // log数据访问
        ... // 检查数据完整性
        return text[position];
    }
private:
    std::string text;
};

```

```cpp
class TextBlock{
public:
    ...
    const char& operator[](std::size_t position) const {
        ...	// 边界检查
        ... // log数据访问
        ... // 检查数据完整性
        return text[position];
    }
    char& operator[](std::size_t position) {
        return const_cast<char&>(static_cast<const TextBlock&>(*this)[position]);
    }
private:
    std::string text;
};
```

需要两次转型动作，static_cast将*this对象转成const对象，以使其能调用const 成员函数，返回的const char&返回值再通过const_cast移除const

## 确定对象被使用前已先被初始化

对无任何成员的内置数据类型，手动完成初始化；对类而言，初始化的责任落在了构造函数，规则也简单，就是确保每个构造函数都对每一个成员完成初始化。

在构造函数的函数体内的用=为成员赋值的操作并不是初始化。初始化动作发生在进入函数体之前，若成员也为非内置类型，则它们的初始化动作发生的更早，在这些成员的default构造函数被自动调用之时。因此，这种构造函数的写法虽然也能让成员被置上期望的值，但效率不高。default构造所做的工作是被浪费掉的。推荐使用成员初始化列表的方式进行初始化，可以避免这一问题

为了避免遗漏一些成员导致其并未被初始化的情况，规定总是在初值列表中列出所有成员变量及基类（但个人习惯是在声明时已经给了初值（C++11支持）的成员变量，就不再初始化列表中再次列出了）

如果成员变量是const或者references，则必须通过成员初始化列表的方式进行初始化。

成员初始化次序:

- 基类总是比派生类先被初始化
- 成员变量总是以其声明次序（而不是初始化列表中的顺序）被初始化，但最好让两者保持一致，避免不必要的误解

不同编译单元内的non-local static 对象的初始化次序:

static 对象的寿命在其被构造出来直到程序结束为止，也就是说它们的析构函数会在main()结束时才被自动调用
static 对象包括：

- local static 对象（局部静态变量）：函数内的定义的static 对象，其作用域仅限在函数内，故为local；
- non-local static 对象：包括global static 对象，定义于namespace作用域，class作用域，file作用域内的static 对象；

而所谓的编译单元（translation unit）是只产出单一目标文件（single object file）的源码集合。通常就是单一的源文件加上其#include包含的头文件

这里的问题是对于定义在不同的编译单元内的non-local static 对象，C++是无法保证其初始化的顺序的。所以如果某个编译单元内的某个non-local static 对象的初始化动作依赖于另一编译单元内的某个non-local static 对象，就可能会出问题

解决的办法就是：将每个non-local static 对象都移动到自己的专属函数中（non-local static变 local static），然后让这些函数返回local static 对象的引用。然后让用户调用函数来使用这个local static 对象，而不是直接访问non-local static 对象。其实这也是单子（Singleton）模式的一种常见实现方法。

C++可以保证，函数内的local static 对象会在该函数被调用期间，首次遇到该对象的定义式时被初始化。这不仅可以解决初始化次序的问题，还可以在该函数没有被调用时，节约掉对象的构造和析构的成本。bravo！

但是，即便使用上述方法，在多线程环境下，还是会有不确定性。一个解决办法就是：在程序的单线程启动阶段，手动调用所有的reference-returning 函数，以消除与初始化有关的竞速问题（race conditions）

## 了解 C++ 默默编写并调用哪些函数

如果自己没有声明构造函数，析构函数，copy构造函数，copy赋值操作符，那么编译器会为你声明default版本的，且这些函数都是public且inline的。这些default函数只有在其需要被调用时，才会被创建出来

其中关于default构造函数和default析构函数，其作用主要是为编译器提供一个地方来放置“幕后”代码，如调用基类或者非static成员变量的构造函数和析构函数。此外，default析构函数通常是非virtual的，除非该类的基类有声明virtual析构函数，这样该类的析构函数会继承基类的虚属性。

对于default的copy构造函数和copy赋值操作符，只是单纯地将源对象的每一个非static成员变量拷贝到目标对象。但只有当拷贝动作合法时，编译器才会这样做。

比如，对于一个含有引用成员或者const成员的类，单纯的拷贝操作显然不合法，因此编译器为赋值动作生成默认的copy赋值操作符，需要你自己声明并定义它。

再比如，某个基类将copy赋值操作符声明为private，那么编译器就会拒绝为其派生类生成default的copy赋值操作符。因为从逻辑上去推，派生类的copy赋值操作符是要负责处理基类成员的赋值动作的，而基类成员大概率是private的，这时就应当通过调用基类的copy赋值操作符来完成，而派生类是无权访问基类的private成员函数的。这时编译器只能怒摔啤酒，大喊一声“焯”！（doge）

