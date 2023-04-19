import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'
import { getToken } from './utils/auth'

router.beforeEach(async (to:RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  if (!getToken()) {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
} )

router.afterEach(async (to:RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  
} )

