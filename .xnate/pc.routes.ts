export default [    
  {
    path: '/en-US/home',
    // @ts-ignore
    component: () => import('/Users/wangbaoqi/personal/xnate-design/xnate-react-ui/pages/home/index.tsx')
  },
  {
    path: '/zh-CN/home',
    // @ts-ignore
    component: () => import('/Users/wangbaoqi/personal/xnate-design/xnate-react-ui/pages/home/index.tsx')
  },
  {
    path: '/zh-CN/guide/intro',
    // @ts-ignore
    component: () => import('/Users/wangbaoqi/personal/xnate-design/xnate-react-ui/docs/guide/intro.zh-CN.md')
  },
  {
    path: '/zh-CN/guide/usage',
    // @ts-ignore
    component: () => import('/Users/wangbaoqi/personal/xnate-design/xnate-react-ui/docs/guide/usage.zh-CN.md')
  },
  {
    path: '/zh-CN/hooks/theme',
    // @ts-ignore
    component: () => import('/Users/wangbaoqi/personal/xnate-design/xnate-react-ui/docs/hooks/theme.zh-CN.md')
  },
  {
    path: '/zh-CN/components/button',
    // @ts-ignore
    component: () => import('/Users/wangbaoqi/personal/xnate-design/xnate-react-ui/src/components/button/docs/zh-CN.md')
  },
  {
    path: '/zh-CN/guide',
    redirect: '/zh-CN/guide/intro',
  },
  {
    path: '/zh-CN/components',
    redirect: '/zh-CN/components/button',
  },
  {
    path: '/en-US/guide',
    redirect: '/en-US/guide/intro',
  },
  {
    path: '/en-US/components',
    redirect: '/en-US/components/button',
  },
]