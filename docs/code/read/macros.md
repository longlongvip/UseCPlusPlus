# 经典宏

```cpp
#define PRIVATE_TO_STR(x) #x
#define PRIVATE_TO_CHAR(x) #@x
#define PRIVATE_CAT(x, y) X ## y
#define CAT_STR(x, y) PRIVATE_CAT(x, y)
#define OFFSET_OF(type,field) ( (size_t) &(( type *) 0)-> field ) // 得到一个字段在结构体struct中的偏移量(字节数)
#define FILED_SIZE( type, field ) sizeof( ((type *) 0)->field ) // 得到一个结构体中字段的大小（字节数）
#define CONTAINER_OF(ptr, type, filed) (type *)((char *)(ptr) - (char *) &((type *)0)->filed ) // 根据结构体变量字段地址获取整个结构体的存储空间首地址
#define UPPERCASE(c) ( ((c) >= 'a' && (c) <= 'z') ? ((c) - 0x20) : (c) )
#define LOWERCASE(c) ( ((c) >= 'a' && (c) <= 'z') ? (c) : ((c) + 0x20))
#define ARRAY_SIZE(arr) (sizeof((arr)) / sizeof((arr[0]))) // 获取一个数组元素的个数
#define LOG(fmt, ...)  printf("[FILE: %s] [FUNCTION: %s] [LINE: %d] " fmt "\n", __FILE__, __FUNCTION__, __LINE__, ##__VA_ARGS__) // LOG 打印日志
#define SAFE_FREE(p) { free(p); p = nullptr;}

#if USE_DEBUG
        #define DEBUG(fmt, args...)             \
        printf("file:%s function: %s line: %d "fmt, \
        __FILE__, __FUNCTION__, __LINE__, ##args)
#else
  #define DEBUG(fmt, args...)

#endif

```

## 控制台 ANSI 转义序列

```cpp

#define PRT_NONE         "\033[m\n"
#define PRT_RED          "\033[0;32;31m"
#define PRT_GREEN        "\033[0;32;32m"
#define PRT_BLUE         "\033[0;32;34m"
```

## 参考

-   https://www.zhihu.com/question/511848015/answers/updated
