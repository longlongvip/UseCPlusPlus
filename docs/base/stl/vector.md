# vector

向量是表示可以改变大小的数组的序列容器

## 函数

- begin() 返回指向第一个元素的迭代器
- end() 返回指向最后一个元素的迭代器
- rbegin() 返回指向最后一个元素的反向迭代器
- rend() 返回指向第一个元素的反向迭代器
- cbegin() 返回指向第一个元素的常量迭代器
- cend() 返回指向最后一个元素的常量迭代器
- crbegin() 返回指向最后一个元素的常量反向迭代器
- crend() 返回指向第一个元素的常量反向迭代器
- size() 返回向量中元素的数量
- max_size() 返回向量可以容纳的最大元素数量
- resize() 改变向量的大小
- capacity() 返回向量的容量
- reserve() 保留向量的容量
- shrink_to_fit() 减小向量的容量
- empty() 检查向量是否为空
- at() 返回指定位置的元素
- front() 返回第一个元素
- back() 返回最后一个元素
- data() 返回指向向量第一个元素的指针
- fill() 用指定值填充向量
- swap() 交换两个向量的内容
- assign() 分配新内容给向量
- push_back() 在向量末尾添加元素
- pop_back() 删除向量末尾的元素
- insert() 在向量中插入元素，潜在的缓慢
- erase() 从向量中删除元素，潜在的缓慢
- clear() 清空向量
- emplace() 在向量中构造和插入元素
- emplace_back() 在向量末尾构造和插入元素
- 