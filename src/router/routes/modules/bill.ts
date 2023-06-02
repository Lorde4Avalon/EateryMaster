import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const bill: AppRouteModule = {
  path: '/bill',
  name: 'bill',
  component: LAYOUT,
  redirect: '/bill/all',
  meta: {
    orderNo: 12,
    icon: 'ion:grid-outline',
    title: t('routes.bill.bill'),
  },
  children: [
    {
      path: 'all',
      name: 'billAll',
      component: () => import('/@/views/bill/index.vue'),
      meta: {
        title: t('routes.bill.billAll'),
      },
    },
  ],
}

export default bill
