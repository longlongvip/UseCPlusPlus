# define

`#define` 定义的常量是一个预处理宏，它在编译之前被替换，作用域为定义处到文件结束
`const` 定义的常量是一个真正的变量，其作用域根据定义的位置而定，可以是局部或全局作用域

`#define` 不具有类型检查，在预处理阶段只是简单地进行文本替换，容易导致一些潜在的错误
`const` 定义的常量具有类型检查，编译器会对其进行类型检查，提供更好的类型安全性

`#define` 在预处理阶段进行文本替换，因此在调试时无法查看使用#define定义的常量的值
`const` 定义的常量是真正的变量，可以被调试器识别并显示其值
