# clang-format
```cpp
# 缺省值使用的基础配置，不使用
# BasedOnStyle: WebKit


## Language 语言
# 语言标准
Standard: Cpp11


## Preprocessor 预处理指令风格
# 重排include指令
# IncludeBlocks: Regroup
IncludeCategories:
  # 普通头文件
  - Regex:    '^"'
    Priority: 1
  # 系统头文件
  - Regex:    '^<'
    Priority: 0
# 预处理指令在#后缩进
# IndentPPDirectives: AfterHash
# 不要给include指令、using语句排序
SortIncludes: false
SortUsingDeclarations: false


## Common 通用风格属性
# 缩进大小
IndentWidth: 4
# Tab宽度，虽然将不会使用Tab
TabWidth: 4
UseTab: Never
# 每行长度不指定，这样原始的折行方式得以尽可能保留
ColumnLimit: 0
# 连续的赋值语句，不要对齐它们的等号
AlignConsecutiveAssignments: false
# 连续的声明语句，不要对齐它们的变量名
AlignConsecutiveDeclarations: false
#   解释：变量名长度相差很大的时候会产生大片空白，不美观
# 连续的续行符（反斜杠），对齐到可能的最左位置
AlignEscapedNewlines: Left
# 二元运算符的操作数过长，则换行后将它们对齐
AlignOperands: true
# 二元运算符表达式太长，把运算符换到下一行行首，而不是上一行行尾
BreakBeforeBinaryOperators: All
# 三元运算符断开时，把?和:都放在下一行
BreakBeforeTernaryOperators: true
# 短的case分支、if语句、while循环可以放进一行
AllowShortCaseLabelsOnASingleLine: true
AllowShortIfStatementsOnASingleLine: true
AllowShortLoopsOnASingleLine: true
# case分支不缩进
IndentCaseLabels: false
# 多行字符串的第一行需要另起，这样它们的缩进能够一致
AlwaysBreakBeforeMultilineStrings: true
# 允许把一个字符串字面量断成两个
BreakStringLiterals: true
# 一行没写完，换到下一行时的缩进
ContinuationIndentWidth: 4
# 指针和引用符号紧跟在类型名后面，不按照文件中的多数习惯
DerivePointerAlignment: false
PointerAlignment: Left
# 类型转换操作后面应该紧跟一个空格，而括号里面不要空格（尽管不推荐C风格的转换）
SpaceAfterCStyleCast: true
SpacesInCStyleCastParentheses: false
# 赋值号两侧各有一个空格
SpaceBeforeAssignmentOperators: true
# 只有流程控制语句的括号前面才有空格
SpaceBeforeParens: ControlStatements
# 基于范围的for循环，冒号前面有一个空格
# SpaceBeforeRangeBasedForLoopColon: true
# 空的括号里面不要放空格
SpaceInEmptyParentheses: false
# 方括号里侧不要有空格
SpacesInSquareBrackets: false


## Blocks 代码块风格
# 允许短的代码块放在一行内
AllowShortBlocksOnASingleLine: true
# 左花括号需要放在新的一行
BreakBeforeBraces: Custom
BraceWrapping:
  # 类、枚举、结构体、联合体都换行
  AfterClass: true
  AfterEnum: true
  AfterStruct: true
  AfterUnion: true
  # 命名空间换行
  AfterNamespace: true
  # 控制语句后换行
  AfterControlStatement: true
  AfterFunction: true
  # extern块后换行
  # AfterExternBlock: true
  # catch/else子句前换行
  BeforeCatch: true
  BeforeElse: true
  # 花括号不缩进
  IndentBraces: false
  # 空的class/namespace等花括号可以写成一对而不拆开
  SplitEmptyRecord: false
  SplitEmptyNamespace: false
# 代码块的开始处不能有空行
KeepEmptyLinesAtTheStartOfBlocks: false
# 连续的空行只保留至多两个，这样的话，1个和2个会有区别感
MaxEmptyLinesToKeep: 2
# 宏名表示的代码块边界
MacroBlockBegin: 'BEGIN'
MacroBlockEnd: 'END'
# 花括号表示初始化列表时，就按照普通方式处理
Cpp11BracedListStyle: true


## Comment 注释风格
# 行尾注释上下对齐
AlignTrailingComments: true
# 不允许分断注释
ReflowComments: false
# 末尾注释前面至少有一个空格
SpacesBeforeTrailingComments: 1


## Class 类的风格属性
# 访问控制属性的缩进（相对与内部块）
AccessModifierOffset: -4
# 多继承时所有基类放在同一行
BreakBeforeInheritanceComma: false
# 继承的冒号前有一个空格
# SpaceBeforeInheritanceColon: true
# 初始化列表在冒号、逗号之前断开
BreakConstructorInitializers: BeforeComma
# 允许多个初始化项目写在同一行
ConstructorInitializerAllOnOneLineOrOnePerLine: false
# 初始化列表的缩进
ConstructorInitializerIndentWidth: 4
# 初始化列表的冒号前有一个空格
# SpaceBeforeCtorInitializerColon: true


## Namespace 命名空间风格属性
# 不能将两个命名空间声明连续写在同一行
CompactNamespaces: false
# 命名空间的后花括号自动加上注释，如果已经有了错误的，那就改成对的
FixNamespaceComments: true
# 除了最外层的命名空间，其他的都要缩进
NamespaceIndentation: Inner


## Template 模板的风格属性
# template声明后不必须另起一行
AlwaysBreakTemplateDeclarations: false
# template关键字后面不能有空格
SpaceAfterTemplateKeyword: false
# 尖括号里侧不要有空格
SpacesInAngles: false


## Functions 函数调用的风格属性
# 一行不能容纳所有参数时，强制把参数换到下一行
AlignAfterOpenBracket: AlwaysBreak
# 当函数声明过长，允许把全部参数放在第二行，而不是每个参数占用一行
AllowAllParametersOfDeclarationOnNextLine: true
# 允许短的函数定义放在一行内
# Inline表示允许类内就地定义的函数和全局的空函数
AllowShortFunctionsOnASingleLine: Inline
# 函数定义的返回类型不能单独占一行
AlwaysBreakAfterReturnType: None
# 允许几个函数的实参、形参在同一行
BinPackArguments: true
BinPackParameters: true
# 函数名如果被换到下一行，那么需要缩进
IndentWrappedFunctionNames: true
# 括号里面不要有空格
SpacesInParentheses: false


## 不使用的项目
# 一些可能有语法意义的注释，防止它们被折行
CommentPragmas: ''
# 解释成foreach循环的宏名
ForEachMacros: []
```