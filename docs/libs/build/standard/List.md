# List
## 概述

## 头文件
```cpp
#include <list>
```

## 声明
```cpp
list<T> list;
```
T 是 list 要存储的对象集合的类型，该 list 的变量名称是 list。T 可以是任何符合 Copy/Move Assignable 条件的类型，包括用户自定义类型。如果 T 不符合 Copy / Move Assignable 或者复制 / 移动成本很高昂，可以考虑使用 T* 甚至 std::unique_ptr<T> 来代替 T

## 初始化

## 操作
- 迭代器
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| list.begin() | 回传一个 Iterator，它指向 list 第一个元素 |  |
| list.cbegin() | 回传一个 Const Iterator，它指向 list 第一个元素 |  |
| list.end() | 回传一个 Iterator，它指向 list 最尾端元素的下一个位置 | 它不是最末元素 |
| list.cend() | 回传一个 Const Iterator，它指向 list 第一个元素 |  |
| list.rbeigin() | 回传一个反向 Iterator，它指向 list 最尾端元素 |  |
| list.crbegin() | 回传一个反向 Const Iterator，它指向 list 第一个元素 |  |
| list.rend() | 回传一个 Iterator，它指向 list 的第一个元素的前一个位置 |  |
| list.crend() | 回传一个 Const Iterator，它指向 list 第一个元素 |  |

- 访问元素
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| list.front() | 访问 list 中的第 1 个元素   | TD |
| list.back()  | 访问 list 中的最后 1 个元素 | TD |

- 增加元素
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| list.push_front(e) | 新增 1 个元素 e 至 list 的前端，必要时会进行存储器配置 | TD |
| list.push_back(e)  | 新增 1 个元素 e 至 list 的尾端，必要时会进行存储器配置 | TD |
| list.insert(pos, num_e, e) |  插入 num_e 个元素 e 至 list 内的任意位置 pos | TD |

- 删除元素
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| list.pop_front() | 删除 list 第 1 个元素 | TD |
| list.pop_back() | 删除 list 最后 1 个元素 | TD |
| list.erase(pos, num_e, e) |  删除 list 中 num_e 个元素 e | TD |
| list.clear() |  删除 list 中所以元素 | 没有改变 list 的容量 |

- 长度、判空、容量
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| list.size() | 获取 list 当前的元素个数 | TD |
| list.empty() | 判断 list 是否为空  | list 为空为真，list 不为空为假 |
| list.capacity() |  获取 list 当前的容量 | 与存储器的配置有关，它通常只会增加，不会因为元素被删减而随之减少 |

- 重新配置、重置长度
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| list.reserve() | 改变 list 的容量大小 | 容量只能增加，不可以减少 |
| list.resize() | 改变 list 当前的元素个数  | v 为空为真，v 不为空为假 |

- 打印
```cpp
void print_list(const vector<int>& list)
{
	for (auto list_e : list)
	{
		cout << list_e << " ";
	}
	cout << endl;
}
```
