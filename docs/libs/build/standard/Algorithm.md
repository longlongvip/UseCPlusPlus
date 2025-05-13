# Algorithm

## all_of
每个元素都要满足条件
bool std::all_of(first, end, 条件)
```cpp
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7};
    if(std::all_of(
        v.cbegin(), v.cend(), [](int i) { return i > 0; }
    ))
    {
        std::cout << "All Element > 0" << std::endl;
    }
    return 0;
}
```

## any_of
至少有一个元素要满足条件
bool std::any_of(first, end, 条件)
```cpp
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, -8};
    if(std::any_of(
        v.cbegin(), v.cend(), [](int i) { return i < 0; }
    ))
    {
        printf("Have a Element < 0\n");
    }
    return 0;
}
```

## none_of
没有一个元素要满足条件
bool std::none_of(first, end, 条件)
```cpp
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, 8};
    if(std::none_of(
        v.cbegin(), v.cend(), [](int i) { return i < 0; }
    ))
    {
        printf("Have no Element < 0\n");
    }
    return 0;
}
```

