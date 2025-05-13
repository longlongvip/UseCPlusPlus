/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'

import { h } from 'vue'
import { useData } from 'vitepress'

/* .vitepress/theme/index.ts */
import backTop from "./components/backTop.vue"
import navList from './navlist/navList.vue'

export default {
    extends: DefaultTheme,
    
    enhanceApp({ app }) {
        // 注册全局组件
        app.component('backTop', backTop)
        app.component('navList', navList)
    },
    
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(DefaultTheme.Layout, props)
    },
}
