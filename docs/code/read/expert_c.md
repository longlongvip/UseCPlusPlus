# C专家编程

## 令人疑惑的问题

代码1：

```C
typedef struct Sex
{
    int Sex;
};
```

代码1中，Sexd的真正意思是什么？

## 前言

不容易发现的书写错误：

```C
if(i = 3) // 错误
if(i == 3) // 正确
```

一旦有过这样的经历，这种痛苦的错误（需要进行比较时误用了赋值符号〉般不会再犯。有些程序员甚至养成了一种习惯，在比较式中先写常数，如: `if(3 == i)`。这样，如果不小心误用了赋值符号，编译器就会发出`attempted assighnment to literal(试图向常数赋值)`的错误信息。虽然当你比较两个变量时，这种技巧起不了作用。但是，积少成多，如果你一直留心这些小技巧，迟早会对你有所帮助的。

价值2000万美元的Bug：
如果 Bug 不解决，将会使一桩价值 2000 万美元的硬件产品生意告吹

```C
x == 2 // 错误
x = 2 // 正确
```

这是个打字错误，它的原意是一条赋值语句。程序员的手指放在`=`键上，不小心多按了一下。这条语句成了将`x与2进行比较`，比较结果是`true`或者`false`，然后丢弃这个比较结果。

C语言的表达能力也实在是强，编译器对于求一个表达式的值，但不使用该值这样的语句竟然也能接受，并且不发出任何警告，只是简单地把返回结果丢弃。我们不知道是应该为及时找到这个问题的好运气而庆幸，还是应该为这样一个常见的打字错误可能付出高昂的代价而痛心疾首。有些版本的长整数程序已经能够检测到这类问题，但人们很容易忽视这些有用的工具。

## 重视Bug，即便是警告，也要重视

## 编程挑战1

1. 关于`time_t`,什么时候它会到达尽头，重新回到开始呢？
代码实现：

```C

```

对时间的编程没人是高手
