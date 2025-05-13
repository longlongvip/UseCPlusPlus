# static

当与不同类型一起使用时，`static` 关键字具有不同的含义

## 静态变量：函数中的变量，类中的静态变量

- 函数中的静态变量
当变量声明为static时，空间将在程序的生命周期内分配。即使多次调用该函数，静态变量的空间也只分配一次，前一次调用中的变量值通过下一次函数调用传递。这对于在 C/C++ 或需要存储先前函数状态的任何其他应用程序非常有用

```cpp
#include <iostream> 
#include <string> 
using namespace std; 

void demo() 
{ 
    // static 变量, 只分配一次内存空间
    static int count = 0; 
    cout << count << " "; 

    // 值被更新， 将被带到下一个函数调用 
    count++; 
} 

int main() 
{ 
    for (int i=0; i < 5; i++)
    {
        demo(); 
    }
    return 0; 
} 
```

您可以在上面的程序中看到变量 `count` 被声明为 `static`。因此，它的值通过函数调用来传递。每次调用函数时，都不会对变量计数进行初始化

- 类中的静态成员

类可以包含静态成员数据和静态成员函数

当数据成员被声明为 `static` 时，只会为类的所有对象保留一个数据副本

静态数据成员不是给定的类的对象的一部分，因此静态数据成员的声明不被视为一个定义，所以必须在类的外部单独定义它
静态类成员具有外部链接，即在文件范围内可见

```cpp
#include<iostream> 
using namespace std; 

class Apple 
{ 
public: 
    static int i; 

    Apple() 
    { 
        // Do nothing 
    }; 
}; 

int main() 
{ 
Apple obj1; 
Apple obj2; 
obj1.i =2; 
obj2.i = 3; 

// prints value of i 
cout << obj1.i<<" "<<obj2.i; 
} 
```

您可以在上面的程序中看到我们已经尝试为多个对象创建静态变量i的多个副本。但这并没有发生。因此，类中的静态变量应由用户使用类外的类名和范围解析运算符显式初始化，如下所示：

```cpp
#include<iostream> 
using namespace std; 

class Apple 
{ 
public: 
    static int i; 

    Apple() 
    { 
        // Do nothing 
    }; 
}; 

int Apple::i = 1; 

int main() 
{ 
    Apple obj; 
    // prints value of i 
    cout << obj.i; 
} 
```

## 静态成员

- 类对象为静态
就像变量一样，对象也在声明为 `static` 时具有范围，直到程序的生命周期
考虑以下程序，其中对象是非静态的

```cpp
#include<iostream> 
using namespace std; 

class Apple 
{ 
    int i; 
    public: 
        Apple() 
        { 
            i = 0; 
            cout << "Inside Constructor\n"; 
        } 
        ~Apple() 
        { 
            cout << "Inside Destructor\n"; 
        } 
}; 

int main() 
{ 
    int x = 0; 
    if (x==0) 
    { 
        Apple obj; 
    } 
    cout << "End of main\n"; 
} 
```

在上面的程序中，对象在if块内声明为非静态。因此，变量的范围仅在if块内。因此，当创建对象时，将调用构造函数，并且在if块的控制权越过析构函数的同时调用，因为对象的范围仅在声明它的if块内。 如果我们将对象声明为静态，现在让我们看看输出的变化

```cpp
#include<iostream> 
using namespace std; 

class Apple 
{ 
    int i; 
    public: 
        Apple() 
        { 
            i = 0; 
            cout << "Inside Constructor\n"; 
        } 
        ~Apple() 
        { 
            cout << "Inside Destructor\n"; 
        } 
}; 

int main() 
{ 
    int x = 0; 
    if (x==0) 
    { 
        static Apple obj; 
    } 
    cout << "End of main\n"; 
} 
```

您可以清楚地看到输出的变化。现在，在main结束后调用析构函数。这是因为静态对象的范围是贯穿程序的生命周期

- 类中的静态函数
  就像类中的静态数据成员或静态变量一样，静态成员函数也不依赖于类的对象。我们被允许使用对象和'.'来调用静态成员函数。但建议使用类名和范围解析运算符调用静态成员

允许静态成员函数仅访问静态数据成员或其他静态成员函数，它们无法访问类的非静态数据成员或成员函数

```cpp
#include<iostream> 
using namespace std; 

class Apple 
{ 
    public: 
        // static member function 
        static void printMsg() 
        {
            cout<<"Welcome to Apple!"; 
        }
}; 

// main function 
int main() 
{ 
    // invoking a static member function 
    Apple::printMsg(); 
} 
```

## 总结

- 函数体内static变量的作用范围为函数体。不同于auto变量。该变量的内存只被分配一次。因此其值在下次调用时仍维持上次的值
- 在模块内的static全局变量可以被模块内所用函数访问，但不能被模块外其它函数访问
- 在模块内的static函数只可被这一模块内的其它函数调用，这个函数的使用范围被限制在声明它的模块内
- 在类中的static成员变量属于整个类所拥有，对类的所有对象只有一份拷贝
- 在类中的static成员函数属于整个类所拥有，这个函数不接收this指针，因而只能访问类的static成员变量
