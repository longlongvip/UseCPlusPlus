export const localSearchOptions = {
    locales: {
        root: {
            // 这里是个大坑，zh 是不生效的，改为 root 即可
            // https://github.com/vuejs/vitepress/issues/3985
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                    }
                }
            }
        }
    }
};
