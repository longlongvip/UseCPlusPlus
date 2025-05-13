/* config/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: 'Home', link: '/' },
    { text: '基础', link: '/base/' },
    { text: '高级', link: '/advanced/' },
    {
        text: '系统',
        items: [
            { text: 'Windows', link: '/windows/' },
            { text: 'Linux', link: '/linux/' },
            { text: 'Mac', link: '/mac/' },
        ],
    },
    { text: '工具', link: '/tool/' },
    { text: '库', link: '/libs/' },
    { text: '资源', link: '/res/' }

]
