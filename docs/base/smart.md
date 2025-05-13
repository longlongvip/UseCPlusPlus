# 智能指针

在现代 C++ 编程中，标准库包含智能指针，该指针用于确保程序不存在内存和资源泄漏且是异常安全的

智能指针是在 `<memory>` 头文件中的 `std` 命名空间中定义的。 它们对 `RAII` 或“获取资源即初始化”编程惯用法至关重要。 此习惯用法的主要目的是确保资源获取与对象初始化同时发生，从而能够创建该对象的所有资源并在某行代码中准备就绪。 实际上，RAII 的主要原则是为将任何堆分配资源（例如，动态分配内存或系统对象句柄）的所有权提供给其析构函数包含用于删除或释放资源的代码以及任何相关清理代码的堆栈分配对象。

大多数情况下，当初始化原始指针或资源句柄以指向实际资源时，会立即将指针传递给智能指针。 在现代 C++ 中，原始指针仅用于范围有限的小代码块、循环或者性能至关重要且不会混淆所有权的 Helper 函数中。

下面的示例将原始指针声明与智能指针声明进行了比较。

```cpp
void use_raw_pointer()
{
    Song* pSong = new Song(L"Nothing on You", L"Bruno Mars"); 
    
    delete pSong; // Don't forget to delete!
}

void use_smart_pointer()
{
    unique_ptr<Song> song2(new Song(L"Nothing on You", L"Bruno Mars"));
    
} // song2 is deleted automatically here.
```

## unique_ptr
