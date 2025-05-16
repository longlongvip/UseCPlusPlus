# 文件操作

## CreateFile

## ReadFile

// https://learn.microsoft.com/zh-cn/windows/win32/api/fileapi/nf-fileapi-readfile
// https://learn.microsoft.com/zh-cn/windows/win32/api/fileapi/nf-fileapi-readfileex

```cpp
BOOL ReadFile(
    [in]                HANDLE       hFile,                 // 文件句柄
    [out]               LPVOID       lpBuffer,              // 指向接收从文件或设备读取的数据的缓冲区的指针
    [in]                DWORD        nNumberOfBytesToRead,  // 要读取的最大字节数
    [out, optional]     LPDWORD      lpNumberOfBytesRead,   // 
    [in, out, optional] LPOVERLAPPED lpOverlapped           // 
);
```

> 指向使用同步 hFile 参数时接收读取的字节数的变量的指针。 ReadFile 在执行任何工作或错误检查之前将此值设置为零。 如果这是一个异步操作，请对此参数使用 NULL 以避免潜在的错误结果

- 如果使用 FILE_FLAG_OVERLAPPED 打开 hFile 参数，则需要指向 OVERLAPPED 结构的指针，否则它可以 NULL
- 如果使用 FILE_FLAG_OVERLAPPED打开 hFile，则 lpOverlapped 参数必须指向有效的唯一 OVERLAPPED 结构，否则函数无法错误地报告读取操作已完成
- 对于支持字节偏移的 hFile，如果使用此参数，则必须指定从文件或设备开始读取的字节偏移量。 通过设置 Offset 和 OffsetHighOVERLAPPED 结构的成员来指定此偏移量。 对于不支持字节偏移的 hFile，将忽略 Offset 和 OffsetHigh
-  GetLastError 代码 ERROR_IO_PENDING 不是失败;它指定读取操作正在异步等待完成。 有关详细信息，请参阅“备注”。

返回值：
    - 读取请求的字节数
    - 写入操作在管道的写入端完成
    - 正在使用异步句柄，读取正在异步发生
    - 发生错误

## ReadFileScatter

从文件读取数据并将其存储在缓冲区数组中。函数开始从文件读取由 OVERLAPPED 结构指定的位置的数据。 ReadFileScatter 函数异步操作

```cpp
BOOL ReadFileScatter(
    [in]      HANDLE                  hFile,
    [in]      FILE_SEGMENT_ELEMENT [] aSegmentArray,
    [in]      DWORD                   nNumberOfBytesToRead,
            LPDWORD                   lpReserved,
    [in, out] LPOVERLAPPED            lpOverlapped
);
```

## SetFilePointer

