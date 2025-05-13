import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

import { head, markdown, metaData, nav, localSearchOptions } from './configs/index.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,

    head: head,
    appearance: 'dark',

    // 链接
    // cleanUrls: true,
    ignoreDeadLinks: false,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // logo: '/logo.svg', // 左上角的logo
        search: {
            provider: 'local',
            options: localSearchOptions,
        },

        nav,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        // 大纲
        outline: {
            level: [2, 6],
            label: '本页目录'
        },

        footer: {
            message: 'Released under the MIT License.',
            // 自动更新时间与版权信息
            copyright: `Copyright © 2019-${new Date().getFullYear()} present X Studio`,
        }
    },

    vite: {
        plugins: [
            AutoSidebar({
                collapsed: true,
                titleFromFile: true,
            })
        ]
    },

    markdown: markdown,

})
