import { defineConfig } from 'umi';

const publicPath = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : 'dist/'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath,
  routes: [
    { path: '/login', component: '@/pages/index', hidden: true },
    { 
      path: '/base', 
      component: '@/layouts',
      routes: [
        {
          path: 'progran-center',
          component: '@/pages/programCenter',
          title: '项目认购中心'
        },
        {
          path: 'home',
          component: '@/pages/home',
          title: '账户管理'
        }
      ]
    },
    { path: '/rest/:rest', component: '@/pages/[rest]', hidden: true },
  ],
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {
    dark: false,
    compact: true
  },
  // layout: {
  //   name: '聚米', 
  //   locale: true,
  // }
  request: {
    dataField: ''
  },
  ssr: {
    devServerRender: false,
    mode: 'stream'            // stream 或者 string
  },
});
