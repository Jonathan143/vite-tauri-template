import { RouteRecordRaw } from 'vue-router'

/**
 * 路由注册
 */
export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/result-page',
    name: 'resultPage',
    component: () => import('@/views/system/result-page/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/system/result-page/index.vue'),
  },
]
