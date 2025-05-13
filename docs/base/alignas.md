# alignas

alignas 说明符更改内存中类型或对象的对齐方式

```cpp
alignas(expression) // expression 必须是 0 或 2 的幂（1、2、4、8、16、...）的整型常量表达式
alignas(type-id)
alignas(pack...)
```

使用时要注意一下几点：

- 可以对 struct、class、union 或变量声明使用 alignas 说明符
- 对于 alignas(expression)，表达式必须是 0 或幂为 2（1、2、4、8、16、...）的整型常量表达式，所有其他表达式的格式不正确
- 使用 alignas，而不是 __declspec(align(#)) 实现代码可移植性

alignas 的常见用途是控制用户定义类型的对齐方式，如以下示例所示：

```cpp
struct alignas(8) S1
{
    int x;
};

static_assert(alignof(S1) == 8, "alignof(S1) should be 8");
```

当多个 alignas 应用于同一声明时，将使用具有最大值的声明，忽略 0 的 alignas 值

```cpp
class alignas(4) alignas(16) C1 {};

// `alignas(0)` 被忽视
union alignas(0) U1
{
    int i;
    float f;
};

union U2
{
    int i;
    float f;
};

static_assert(alignof(C1) == 16, "alignof(C1) should be 16");
static_assert(alignof(U1) == alignof(U2), "alignof(U1) should be equivalent to alignof(U2)");
```

可以将类型作为对齐值提供。 该类型的默认对齐方式用作对齐值，如以下示例所示

```cpp
struct alignas(double) S2
{
    int x;
};

static_assert(alignof(S2) == alignof(double), "alignof(S2) should be equivalent to alignof(double)");
```

模板参数包（alignas (pack...)）可用于对齐值。 使用包中所有元素的最大对齐值

```cpp
template <typename... Ts>
class alignas(Ts...) C2
{
    char c;
};

static_assert(alignof(C2<>) == 1, "alignof(C2<>) should be 1");
static_assert(alignof(C2<short, int>) == 4, "alignof(C2<short, int>) should be 4");
static_assert(alignof(C2<int, float, double>) == 8, "alignof(C2<int, float, double>) should be 8");
```

如果应用了多个 alignas，则生成的对齐是所有 alignas 值中最大的，并且不能小于应用于它的类型的自然对齐方式

用户定义的类型的声明和定义必须具有相同的对齐值

```cpp
// Declaration of `C3`
class alignas(16) C3;

// Definition of `C3` with differing alignment value
class alignas(32) C3 {}; // Error: C2023 'C3': Alignment (32) different from prior declaration (16)

int main()
{
    alignas(2) int x; // ill-formed because the natural alignment of int is 4
}
```
