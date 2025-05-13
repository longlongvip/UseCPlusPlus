---
title: C++ Debug
keywords: C++, Debug
desc: C++ Debug
---

## WinDbg

## Windows PDB Visual Studio 符号加载

通过设置系统环境变量，来让下载符号的流量走代理服务器

```bat
set _NT_SYMBOL_PROXY "127.0.0.1:7890"
```

符号备用服务器

```text
http://www.watchkernel.com/
user:iihacker
pass:mm124578
```

PDB-Proxy
项目地址：https://github.com/szdyg/pdb_proxy
使用方法：
    - server_port 监听端口
    - pdb_dir 缓存pdb的目录
    - pdb_server 远端pdb服务器
可用节点：
    - http://msdl.szdyg.cn/download/symbols
    - https://msdl.szdyg.cn/download/symbols
配置工具：
    - https://github.com/szdyg/pdb_config_tool
Nginx 反向代理：https://blog.sunflyer.cn/archives/848

给 PAC 规则文件增加一条记录 .windows.net，表示支持 windows.net 下所有地址的访问

[pySymProxy](https://github.com/inbilla/pySymProxy)
[symcn-site](https://github.com/BlackINT3/symcn-site) Windows符号服务器镜像节点，用于国内加速
