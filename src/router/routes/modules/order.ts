import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const order: AppRouteModule = {
  path: '/order',
  name: 'order',
  component: LAYOUT,
  redirect: '/order/all',
  meta: {
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.order.order'),
  },
  children: [
    {
      path: 'all',
      name: 'orderAll',
      component: () => import('/@/views/order/index.vue'),
      meta: {
        title: t('routes.order.orderAll'),
      },
    },
  ],
}

export default order
