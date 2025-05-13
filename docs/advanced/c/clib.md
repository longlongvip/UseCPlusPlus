# 标准 C 库

## GUN C

## BSD C

## CLang C

## MSVC C

- 在Visual C++ 2012 以前，完全不支持C99与C11的新特性，仅支持1989年版的ANSI C

- Visual C++ 2012 开始在C模式下支持C99的部分特性，如designated initializers、compound literals、_Bool类型
- Visual C++ 2013 很大改进了对C99特性的支持。
- Visual C++ 2015 基本上完整支持了C99标准库，但需要编译器尚未支持的C99语言特性的那部分标准库除外

## Intel C

## Tiny C

## DjGPP C

## 实现

- [Glib C](https://sourceware.org/glibc/sources.html)
- [BSD Libc]()
- [Microsoft C run-time library](https://learn.microsoft.com/en-us/cpp/c-runtime-library/run-time-routines-by-category?view=msvc-170)
- [Diet Libc](https://www.fefe.de/dietlibc/) Diet Libc 是针对小尺寸优化的 libc。它可用于在 alpha、arm、hppa、ia64、i386、mips、s390、sparc、sparc64、ppc 和 x86_64 上为 Linux 创建小型静态链接二进制文件
- [μC Libc](https://www.uclibc.org/) 嵌入式 μClinux 系统的标准库
- [Newlib](https://www.sourceware.org/newlib/) Newlib 是一个用于嵌入式系统的 C 库
- [klibc](https://mirrors.edge.kernel.org/pub/linux/libs/klibc/2.0/)
- [musl libc](https://musl.libc.org/) musl 是建立在 Linux 系统调用 API 之上的 C 标准库的实现，包括基本语言标准、POSIX 中定义的接口和广泛同意的扩展。MUSL 轻巧、快速、简单、自由，并力求在标准一致性和安全性方面保持正确
- https://web.archive.org/web/20100724201155/http://www.space.unibe.ch/comp_doc/c_manual/C/FUNCTIONS/funcref.htm
- https://pubs.opengroup.org/onlinepubs/9699919799/idx/head.html
- 