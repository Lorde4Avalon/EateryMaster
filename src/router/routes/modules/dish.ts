import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dish: AppRouteModule = {
  path: '/dish',
  name: 'dish',
  component: LAYOUT,
  redirect: '/dish/all',
  meta: {
    dishNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.dish.dish'),
    hideMenu: true,
  },
  children: [
    {
      path: 'all',
      name: 'dishAll',
      component: () => import('/@/views/dish/index.vue'),
      meta: {
        title: t('routes.dish.dishAll'),
        hideMenu: true,
      },
    },
    {
      path: 'add/:id',
      name: 'dishAdd',
      component: () => import('/@/views/dish/add.vue'),
      meta: {
        title: t('routes.dish.dishAdd'),
        hideMenu: true,
      },
    },
    {
      path: 'edit/:id',
      name: 'dishEdit',
      component: () => import('/@/views/dish/edit.vue'),
      meta: {
        title: t('routes.dish.dishEdit'),
        hideMenu: true,
      },
    },
  ],
}

export default dish
