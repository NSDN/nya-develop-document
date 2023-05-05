import type { DefaultTheme } from 'vitepress'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useHomePageSidebar(),

    // 产品需求文档
    ...useRequirementsDocumentSidebar(),
    ...useDiscussionRecordSidebar(),

    // 前端文档
    ...useFrontendPageDesignSidebar(),
    ...useFrontendComponentDesignSidebar(),

    // 后端文档
    ...useBackendSidebar(),
  }
}

function useHomePageSidebar(): DefaultTheme.Sidebar {
  const BACKEND_ROOT = '/backend/'

  return {
    '/': [
      {
        text: '',
        items: [{ text: '首页', link: '/' }],
      },

      {
        text: '产品需求文档（PRD）',
        collapsible: true,
        items: [
          { text: '需求文档', link: '/prd/requirements-document/' },
          { text: '需求讨论记录', link: '/prd/discussion-record/' },
        ],
      },

      {
        text: '前端文档',
        collapsible: true,
        items: [
          { text: '画面设计书', link: '/frontend/page-design/' },
          { text: '组件设计书', link: '/frontend/component-design/' },
        ],
      },

      {
        text: '后端文档',
        collapsible: true,
        items: [
          { text: '开发规约', link: `${BACKEND_ROOT}convention` },
          { text: '目录结构', link: `${BACKEND_ROOT}directory-structure` },
          { text: 'API 设计书', link: `${BACKEND_ROOT}api-design/ping-test` },
        ],
      },
    ],
  }
}

function useRequirementsDocumentSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH: string = '/prd/requirements-document'

  return {
    [ROOT_PATH]: [
      {
        text: '',
        items: [
          { text: '回到首页', link: '/' },
          { text: '需求文档目录', link: `${ROOT_PATH}/` },
        ],
      },

      {
        text: '需求文档',
        items: [
          { text: '需求文档 v0.0.2', link: `${ROOT_PATH}/document_v0.0.x` },
        ],
      },
    ],
  }
}

function useDiscussionRecordSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH: string = '/prd/discussion-record/'

  return {
    [ROOT_PATH]: [
      {
        text: '',
        items: [
          { text: '回到首页', link: '/' },
          { text: '需求讨论记录目录', link: ROOT_PATH },
        ],
      },

      {
        text: '需求讨论记录',
        items: [
          {
            text: '2022.07.15 需求讨论（中午）',
            link: `${ROOT_PATH}discussion_07_15.md`,
          },

          {
            text: '20221230 群内讨论',
            link: `${ROOT_PATH}discussion_20221230.md`,
          },
        ],
      },
    ],
  }
}

function useFrontendPageDesignSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH: string = '/frontend/page-design/'

  return {
    [ROOT_PATH]: [
      {
        text: '',
        items: [
          { text: '回到首页', link: '/' },
          { text: '前端 - 画面设计书', link: ROOT_PATH },
        ],
      },

      {
        text: '画面设计书',
        items: [{ text: 'MainLayout', link: `${ROOT_PATH}main-layout` }],
      },
    ],
  }
}

function useFrontendComponentDesignSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH: string = '/frontend/component-design/'

  return {
    [ROOT_PATH]: [
      {
        text: '',
        items: [
          { text: '回到首页', link: '/' },
          { text: '前端 - 组件设计书', link: ROOT_PATH },
        ],
      },
    ],
  }
}

function useBackendSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH: string = '/backend/'
  const API_DESIGN_PATH: string = `${ROOT_PATH}api-design/`

  return {
    [ROOT_PATH]: [
      {
        text: '',
        items: [
          { text: '回到首页', link: '/' },
          { text: '开发规约', link: `${ROOT_PATH}convention` },
          { text: '目录结构', link: `${ROOT_PATH}directory-structure` },
        ],
      },

      {
        text: 'API 设计书',
        items: [
          {
            text: 'HTTP 连接测试 API',
            link: `${API_DESIGN_PATH}ping-test`,
          },
          {
            text: '创建漫画主题 API（草案）',
            link: `${API_DESIGN_PATH}create-commic-topic`,
          },
        ],
      },
    ],
  }
}
