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

    { text: '前端文档', link: '/frontend/overview' },
    { text: '后端文档', link: '/backend/overview' },
    { text: '文档开发说明', link: '/develop-description/' },
  ]
}
