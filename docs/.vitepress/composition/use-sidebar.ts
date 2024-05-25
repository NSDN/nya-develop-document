import type { DefaultTheme } from 'vitepress'

export default function useSidebar(): DefaultTheme.Sidebar {
  return {
    ...useHomePageSidebar(),

    // 产品需求文档
    ...useRequirementsDocumentSidebar(),
    ...useDiscussionRecordSidebar(),

    // 前端文档
    ...useFrontendSidebar(),

    // 后端文档
    ...useBackendSidebar(),
  }
}

function useHomePageSidebar(): DefaultTheme.Sidebar {
  const FRONTEND_ROOT = '/frontend/'
  const BACKEND_ROOT = '/backend/'
  const REFERENCE_ROOT = '/reference/'

  return {
    '/': [
      {
        text: '产品需求文档（PRD）',
        collapsible: true,
        items: [
          { text: '需求文档', link: '/prd/requirements-document/' },
          { text: '需求讨论记录', link: '/prd/discussion-record/' },
          { text: '待办事项', link: '/prd/todo-list' },
        ],
      },

      {
        text: '方式设计',
        collapsible: true,
        items: [{ text: '图片管理', link: '/design/picture' }],
      },

      {
        text: '前端文档',
        collapsible: true,
        items: [
          { text: '概述', link: `${FRONTEND_ROOT}overview` },
          { text: '画面基本布局', link: `${FRONTEND_ROOT}main-layout` },
          { text: '画面设计书', link: `${FRONTEND_ROOT}/page-design/sidebar` },
          { text: '共通组件', link: `${FRONTEND_ROOT}common-components/todo` },
          { text: '工具函数', link: `${FRONTEND_ROOT}utils/todo` },
        ],
      },

      {
        text: '后端文档',
        collapsible: true,
        items: [
          { text: '概述', link: `${BACKEND_ROOT}overview` },
          { text: 'API 设计书', link: `${BACKEND_ROOT}api-design/ping-test` },
        ],
      },

      {
        text: '资料',
        items: [{ text: '参考资料', link: `${REFERENCE_ROOT}reference` }],
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
          { text: '需求文档 v0.0.4', link: `${ROOT_PATH}/document_v0.0.x` },
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

function useFrontendSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH = '/frontend/'
  const PAGE_DESIGN_PATH = `${ROOT_PATH}page-design/`
  const COMMON_COMPONENTS_PATH = `${ROOT_PATH}common-components/`
  const UTILS_PATH = `${ROOT_PATH}utils/`

  return {
    [ROOT_PATH]: [
      {
        text: '',
        items: [
          { text: '前端 - 回到首页', link: '/' },
          { text: '概述', link: `${ROOT_PATH}overview` },
          { text: '画面基本布局', link: `${ROOT_PATH}main-layout` },
        ],
      },

      {
        text: '画面设计书',
        collapsible: true,
        items: [
          { text: '边栏', link: `${PAGE_DESIGN_PATH}sidebar` },
          { text: '登入画面', link: `${PAGE_DESIGN_PATH}login` },
        ],
      },

      {
        text: '共通组件',
        collapsible: true,
        items: [{ text: 'TODO', link: `${COMMON_COMPONENTS_PATH}todo` }],
      },

      {
        text: '工具函数',
        collapsible: true,
        items: [
          {
            text: '认证授权',
            items: [
              {
                text: 'hashSecreate',
                link: `${UTILS_PATH}authorization#hashsecreate`,
              },
            ],
          },
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
          { text: '后端 - 回到首页', link: '/' },
          { text: '概述', link: `${ROOT_PATH}overview` },
        ],
      },

      {
        text: 'API 设计书',
        collapsible: true,
        items: [
          {
            text: 'HTTP 连接测试 API',
            link: `${API_DESIGN_PATH}ping-test`,
          },

          {
            text: '认证授权',
            items: [
              {
                text: '登入 API',
                link: `${API_DESIGN_PATH}authorization/login`,
              },
            ],
          },

          {
            text: '论坛版块列表获取 API',
            link: `${API_DESIGN_PATH}get-plates`,
          },
          {
            text: '喵玉汉化馆帖文列表获取 API',
            link: `${API_DESIGN_PATH}get-localization-plate`,
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
