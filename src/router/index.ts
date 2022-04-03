import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { useTitle } from '@vueuse/core'
const appTitle = useTitle()

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
})

router.beforeEach(async (to, from, next) => {
  next()
})

router.afterEach(to => {
  const { title } = to.meta
  console.log(to)

  // 设置页面标题
  title && (appTitle.value = title)
})

export default router
