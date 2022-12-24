import type { DefaultTheme } from 'vitepress'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useHomePageSidebar(),
  }
}

function useHomePageSidebar(): DefaultTheme.Sidebar {
  return {
    '/': [
      {
        text: '首页',
        items: [{ text: '目录', link: '/' }],
      },
    ],
  }
}
