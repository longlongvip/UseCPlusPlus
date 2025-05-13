# strcpy

## Visual Studio 实现

```C++
char * __cdecl strcpy(char * dst, const char * src)
{
        char * cp = dst;

        while((*cp++ = *src++) != '\0')
                ;               /* Copy src over dst */

        return( dst );
}
```
解析：

## GCC实现

## CLang实现

## 例子

```C++
#include <cstdio>

char* sex_strcpy(char* dst, const char* src);

int main()
{
	char str_null[1024] = "\0";
	char str_ori[1024] = "Se baby I want to love love with you";
	char* str_copy = str_null;
	str_copy = sex_strcpy(str_copy, str_ori);
	printf("str_ori = %s\n", str_ori);
	printf("str_copy = %s", str_copy);
	return 0;
}

char* sex_strcpy(char* dst, const char* src)
{
	char* cp = dst;
	while ((*cp++ = *src++) != '\0')
	{

	}
	return dst;
}
```
