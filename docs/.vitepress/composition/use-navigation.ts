import type { DefaultTheme } from 'vitepress'

export function useNavigation(): DefaultTheme.NavItem[] {
  return [{ text: '首页', link: '/' }]
}
