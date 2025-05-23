# 编译器

## 什么是编译器？

编译器是将源代码 (.cpp) 编译成可执行程序 (.exe) 的工具

## 编译器御三家

最常见的编译器有：GCC、Clang、MSVC

这些编译器都支持了大部分 C++20 标准和小部分 C++23 标准，而 C++17 标准都是完全支持的。

GCC 主要只在 Linux 和 MacOS 等 Unix 类系统可用，不支持 Windows 系统。但是 GCC 有着大量好用的扩展功能，例如大名鼎鼎的 pbds（基于策略的数据结构），还有各种 __attribute__，各种 __builtin_ 系列函数。不过随着新标准的出台，很多原本属于 GCC 的功能都成了标准的一部分，例如 __attribute__((warn_unused)) 变成了标准的 [[nodiscard]]，__builtin_clz 变成了标准的 std::countl_zero，__VA_OPT__ 名字都没变就进了 C++20 标准。

Clang 是跨平台的编译器，支持大多数主流平台，包括操作系统界的御三家：Linux、MacOS、Windows。Clang 支持了很大一部分 GCC 特性和部分 MSVC 特性。其所属的 LLVM 项目更是编译器领域的中流砥柱，不仅支持 C、C++、Objective-C、Fortran 等，Rust 和 Swift 等语言也是基于 LLVM 后端编译的，不仅如此，还有很多显卡厂商的 OpenGL 驱动也是基于 LLVM 实现编译的。并且 Clang 身兼数职，不仅可以编译，还支持静态分析。许多 IDE 常见的语言服务协议 (LSP) 就是基于 Clang 的服务版————Clangd 实现的 (例如你可以按 Ctrl 点击，跳转到函数定义，这样的功能就是 IDE 通过调用 Clangd 的 LSP 接口实现）。不过 Clang 的性能优化比较激进，虽然有助于性能提升，如果你不小心犯了未定义行为，Clang 可能优化出匪夷所思的结果，如果你要实验未定义行为，Clang 是最擅长复现的。且 Clang 对一些 C++ 新标准特性支持相对较慢，没有 GCC 和 MSVC 那么上心

例如 C++20 早已允许 lambda 表达式捕获 structural-binding 变量，而 Clang 至今还没有支持，尽管 Clang 已经支持了很多其他 C++20 特性

Apple Clang 是苹果公司自己魔改的 Clang 版本，只在 MacOS 系统上可用，支持 Objective-C 和 Swift 语言。但是版本较官方 Clang 落后一些，很多新特性都没有跟进，基本上只有专门伺候苹果的开发者会用

GCC 和 Clang 也支持 Objective-C

MSVC 是 Windows 限定的编译器，提供了很多 MSVC 特有的扩展。也有人在 Clang 上魔改出了 MSVC 兼容模式，兼顾 Clang 特性的同时，支持了 MSVC 的一些特性（例如 __declspec），可以编译用了 MSVC 特性的代码，即 clang-cl，在最新的 VS2022 IDE 中也集成了 clang-cl。值得注意的是，MSVC 的优化能力是比较差的，比 GCC 和 Clang 都差，例如 MSVC 几乎总是假定所有指针 aliasing，这意味着当遇到很多指针操作的循环时，几乎没法做循环矢量化。但是也使得未定义行为不容易产生 Bug，另一方面，这也导致一些只用 MSVC 的人不知道某些写法是未定义行为

Intel C++ compiler 是英特尔开发的 C++ 编译器，由于是硬件厂商开发的，特别擅长做性能优化。但由于更新较慢，基本没有更上新特性，也没什么人在用了。

## C++ 标准

Clang 和 GCC：-std=c++98、-std=c++03、-std=c++11、-std=c++14、-std=c++17、-std=c++20、-std=c++23

MSVC：/std:c++98、/std:c++11、/std:c++14、/std:c++17、/std:c++20、/std:c++latest

## 优化等级

Clang 和 GCC：-O0、-O1、-O2、-O3、-Ofast、-Os、-Oz、-Og

-O0：不进行任何优化，编译速度最快，忠实复刻你写的代码，未定义行为不容易产生诡异的结果，一般用于开发人员内部调试阶段。
-O1：最基本的优化，会把一些简单的死代码（编译器检测到的不可抵达代码）删除，去掉没有用的变量，把部分变量用寄存器代替等，编译速度较快，执行速度也比 -O0 快。但是会丢失函数的行号信息，影响诸如 gdb 等调试，如需快速调试可以用 -Og 选项。
-O2：比 -O1 更强的优化，会把一些循环展开，把一些函数内联，减少函数调用，把一些简单的数组操作用更快的指令替代等，执行速度更快。
-O3：比 -O2 更激进的优化，会把一些复杂的循环用 SIMD 矢量指令优化加速，把一些复杂的数组操作用更快的指令替代等。性能提升很大，但是如果你的程序有未定义行为，可能会导致一些 Bug。如果你的代码没有未定义行为则绝不会有问题，对自己的代码质量有自信就可以放心开，编译速度也会很慢，一般用于程序最终成品发布阶段。
-Ofast：在 -O3 的基础上，进一步对浮点数的运算进行更深层次的优化，但是可能会导致一些浮点数计算结果不准确。如果你的代码不涉及到 NaN 和 Inf 的处理，那么 -Ofast 不会有太大的问题，一般用于科学计算领域的终极性能优化。
-Os：在 -O2 的基础上，专门优化代码大小，性能被当作次要需求，但是会禁止会导致可执行文件变大的优化。会把一些循环展开、内联等优化关闭，把一些代码用更小的指令实现，尽可能减小可执行文件的尺寸，比 -O0、-O1、-O2 都要小，通常用于需要节省内存的嵌入式系统开发。
-Oz：在 -Os 的基础上，进一步把代码压缩，可能把本可以一条大指令完成的任务也拆成多条小指令，为了缩小尺寸牺牲运行时性能，大幅减少了函数内联的机会，有时用于嵌入式系统开发。
-Og：在 -O0 的基础上，尽可能保留更多调试信息，不做破坏函数行号等信息的优化，建议配合产生更多调试信息的 -g 选项使用。但还是会做一些简单的优化，比 -O0 执行速度更快。但 -Og 的所有优化都不会涉及到未定义行为，因此非常适合调试未定义行为。但是由于插入了调试信息，最终的可执行文件会变得很大，一般在开发人员调试时使用。
MSVC：/Od、/O1、/O2、/Ox、/Ob1、/Ob2、/Os

/Od：不进行任何优化，忠实复刻你写的代码，未定义行为不容易产生诡异的结果，一般用于调试阶段。
/O1：最基本的优化，会把一些简单的死代码删除，去掉没有用的变量，把变量用寄存器代替等。
/O2：比 /O1 更强的优化，会把一些循环展开，把一些函数内联，减少函数调用，还会尝试把一些循环矢量化，把一些简单的数组操作用更快的指令替代等。一般用于发布阶段。
/Ox：在 /O2 的基础上，进一步优化，但是不会导致未定义行为，一般用于发布阶段。
/Ob1：启用函数内联。
/Ob2：启用函数内联，但是会扩大内联范围，一般比 /Ob1 更快，但是也会导致可执行文件变大。
/Os：在 /O2 的基础上，专门优化代码大小，性能被当作次要需求，但是会禁止会导致可执行文件变大的优化。会把一些循环展开、内联等优化关闭，把一些代码用更小的指令实现，尽可能减小可执行文件的尺寸，通常用于需要节省内存的嵌入式系统开发。
注意：函数内联是一种优化策略，和 inline 关键字毫无关系

## 调试信息
Clang 和 GCC：-g、-g0、-g1、-g2、-g3

MSVC：/Z7、/Zi

## 标准库御三家

libstdc++ 是 GCC 官方的 C++ 标准库实现，由于 GCC 是 Linux 系统的主流编译器，所以 libstdc++ 也是 Linux 上最常用的标准库。你可以在这里看到他的源码：https://github.com/gcc-mirror/gcc/tree/master/libstdc%2B%2B-v3

libc++ 是 Clang 官方编写的 C++ 标准库实现，由于 Clang 是 MacOS 系统的主流编译器，所以 libc++ 也是 MacOS 上最常用的标准库。libc++ 也是 C++ 标准库中最早实现 C++11 标准的。项目的开源地址是：https://github.com/llvm/llvm-project/tree/main/libcxx

MSVC STL 是 MSVC 官方的 C++ 标准库实现，由于 MSVC 是 Windows 系统的主流编译器，所以 MSVC STL 也是 Windows 上最常用的标准库。MSVC STL 也是 C++ 标准库中最晚实现 C++11 标准的，但是现在他已经完全支持 C++20，并且也完全开源了：https://github.com/microsoft/STL

值得注意的是，标准库和编译器并不是绑定的，例如 Clang 可以用 libstdc++ 或 MSVC STL，GCC 也可以被配置使用 libc++。

在 Linux 系统中，Clang 默认用的就是 libstdc++。需要为 Clang 指定 -stdlib=libc++ 选项，才能使用

## C++11 ABI 问题

在一些特别古老的发行版上（比如 Ubuntu 16.04、CentOS），他们的标准库不支持 C++11，可以开启这个宏：

#define _GLIBCXX_USE_CXX11_ABI 0
或者命令行选项 -D_GLIBCXX_USE_CXX11_ABI=0。
为了更好的学习现代 C++，还是建议安装新的发行版
