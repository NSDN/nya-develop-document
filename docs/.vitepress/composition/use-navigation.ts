import type { DefaultTheme } from 'vitepress'

export function useNavigation(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },

    {
      text: '产品需求文档（PRD）',
      items: [
        { text: '需求文档', link: '/prd/requirements-document/' },
        { text: '需求讨论记录', link: '/prd/discussion-record/' },
      ],
    },

    {
      text: '前端文档',
      items: [
        { text: '画面设计书', link: '/frontend/page-design/' },
        { text: '组件设计书', link: '/frontend/component-design/' },
      ],
    },

    {
      text: '后端文档',
      items: [{ text: 'API 设计书', link: '/backend/api-design/' }],
    },

    {
      text: '文档开发说明',
      link: '/develop-description/',
    },
  ]
}
