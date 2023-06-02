import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const restaurant: AppRouteModule = {
  path: '/restaurant',
  name: 'Restaurant',
  component: LAYOUT,
  redirect: '/restaurant/all',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.restaurant.restaurant'),
  },
  children: [
    {
      path: 'all',
      name: 'RestaurantAll',
      component: () => import('/@/views/restaurant/index.vue'),
      meta: {
        title: t('routes.restaurant.restaurantAll'),
      },
    },
    {
      path: 'add',
      name: 'RestaurantAdd',
      component: () => import('/@/views/restaurant/mutation/add.vue'),
      meta: {
        title: t('routes.restaurant.restaurantAdd'),
        hideMenu: true,
      },
    },
    {
      path: 'edit/:id',
      name: 'RestaurantEdit',
      component: () => import('/@/views/restaurant/mutation/edit.vue'),
      meta: {
        title: t('routes.restaurant.restaurantEdit'),
        hideMenu: true,
      },
    },
    {
      path: 'detail/:id',
      name: 'RestaurantDetail',
      component: () => import('/@/views/restaurant/details/index.vue'),
      meta: {
        title: t('routes.restaurant.restaurantDetail'),
        hideMenu: true,
      },
    },
  ],
}

export default restaurant
