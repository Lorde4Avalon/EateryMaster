import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const board: AppRouteModule = {
  path: '/board',
  name: 'board',
  component: LAYOUT,
  redirect: '/board/all',
  meta: {
    boardNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.board.board'),
    hideMenu: true,
  },
  children: [
    {
      path: 'all',
      name: 'boardAll',
      component: () => import('/@/views/board/index.vue'),
      meta: {
        title: t('routes.board.boardAll'),
        hideMenu: true,
      },
    },
    {
      path: 'add/:id',
      name: 'boardAdd',
      component: () => import('/@/views/board/add.vue'),
      meta: {
        title: t('routes.board.boardAdd'),
        hideMenu: true,
      },
    },
    {
      path: 'edit/:id',
      name: 'boardEdit',
      component: () => import('/@/views/board/edit.vue'),
      meta: {
        title: t('routes.board.boardEdit'),
        hideMenu: true,
      },
    },
  ],
}

export default board
