# <chrono>

准标头 <chrono>，定义表示和操作持续时间及时刻的类和函数

从 Visual Studio 2015 开始，steady_clock 的实现已更改，以便满足 C++ 标准对稳定性和单一性的需求：

- steady_clock 现在基于 QueryPerformanceCounter()
- high_resolution_clock 现在是 steady_clock 的 typedef。在 Microsoft C++ 实现中，steady_clock::time_point 现在是 chrono::time_point<steady_clock> 的 typedef。 但是，其他实现不一定是这样

区域立法机构偶尔会对时区进行更改，而国际标准机构指定何时应考虑新的闰秒。 这些更改的数据库已添加到 Windows 10。 具体而言：

| 功能 | 客户端版本 | 服务器版本 |
| :--: | :--: | :--: |
| 闰秒数据库更新 | Windows 10 1809+ | Windows Server 2019+ |
| 时区更新 | Windows 10 1903+ | Windows Server 2022+ |

在较旧版本的 Windows 上使用时区设施会导致运行时错误

## 使用文档

https://learn.microsoft.com/zh-cn/cpp/standard-library/chrono?view=msvc-170
