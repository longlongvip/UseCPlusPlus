import type { MarkdownOptions } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';
import { figure } from '@mdit/plugin-figure'

export const markdown: MarkdownOptions = {
    // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
    //theme: {
    //    light: 'github-light',
    //    dark: 'github-dark-dimmed'
    //},

    // lineNumbers: true, // 启用行号
    
    config: (md) => {
        md.use(mathjax3);
        md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true });
    },
};
