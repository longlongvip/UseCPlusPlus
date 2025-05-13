# Vector
## 概述

## 头文件
```cpp
#include<algorithm>
#include <vector>
```

## 声明
```cpp
vector<T> v;
```
T 是 vector 要存储的对象集合的类型，该 vector 的变量名称是 v。T 可以是任何符合 Copy/Move Assignable 条件的类型，包括用户自定义类型。如果 T 不符合 Copy / Move Assignable 或者复制 / 移动成本很高昂，可以考虑使用 T* 甚至 std::unique_ptr<T> 来代替 T

## 初始化
```cpp
vector<T> v(num_e);
vector<T> v(nume_e, e);
vector<T> v_new(v);
vector<T> v_new(v.begin(), v.begin()+3);
T v[num_e] = {e}; vector<T> v_new(v, v+num_e);
```

## 操作
- 迭代器
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| v.begin() | 回传一个 Iterator，它指向 vector 第一个元素 |  |
| v.end() | 回传一个 Iterator，它指向 vector 最尾端元素的下一个位置 | 它不是最末元素 |
| v.rbeigin() | 回传一个反向 Iterator，它指向 vector 最尾端元素的 |  |
| v.rend() | 回传一个 Iterator，它指向 vector 的第一个元素的前一个位置 |  |

- 访问元素
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| v[i] | 访问索引值为 i 的元素 | TD |
| v.at(i) | 访问索引值为 i 的元素 | TD |
| v.front() | 访问 v 中的第 1 个元素 | TD |
| v.back() | 访问 v 中的最后 1 个元素 | TD |

- 增加元素
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| v.push_back(e) | 新增 1 个元素 e 至 v 的尾端，必要时会进行存储器配置 | TD |
| v.insert(pos, num_e, e) |  插入 num_e 个元素 e 至 v 内的任意位置 pos | TD |

- 删除元素
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| v.pop_back(e) | 删除 v 最尾端的元素 | TD |
| v.erase(pos, num_e, e) |  删除 v 中 num_e 个元素 e | TD |
| v.clear() |  删除 v 中所以元素 | 没有改变 v 的容量 |

- 长度、判空、容量
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| v.size(e) | 获取 v 当前的元素个数 | TD |
| v.empty() | 判断 v 是否为空  | v 为空为真，v 不为空为假 |
| v.capacity() |  获取 v 当前的容量 | 与存储器的配置有关，它通常只会增加，不会因为元素被删减而随之减少 |

- 重新配置、重置长度
| 函数 | 功能 | 注意 |
| -- | -- | -- |
| v.reserve() | 改变 v 的容量大小 | 容量只能增加，不可以减少 |
| v.resize() | 改变 v 当前的元素个数  | v 为空为真，v 不为空为假 |

- 打印
```cpp
void print_vector(const vector<int>& vector)
{
	for (auto vector_e : vector)
	{
		cout << vector_e << " ";
	}
	cout << endl;
}
```

- 反转
```cpp
reverse(v.begin(), v.end());
```

- 排序
```cpp
sort(v.begin(), v.end());
```
自定义排序：

- 释放
一般情况下， v 的释放
```cpp
vector<T>().swap(v);
```
如果 v 是类的成员，那么释放如下
```cpp
void Delete(vector<T> &v)
{
    vector<T> vt;
    vt.swap(v);
}
```
如果 v 中放的是指针，那么释放如下
```cpp
for (vector<void *>::iterator it = v.begin(); it != v.end(); it ++) 
{
    if (NULL != *it) 
    {
        delete *it; 
        *it = NULL;
    }
}
v.clear()
```
