import { defHttp } from '/@/utils/http/axios'

//pagination type page and size
enum PaginationEnum {
  Page = '1',
  Size = '10',
}

const orderApi = '/orders'

/**
 * @description: Get order list api
 * @param restaurantId
 */
export function getOrderListApi(restaurantId: string) {
  return defHttp.get({
    url: orderApi + `/${restaurantId}` + `/${PaginationEnum.Page}/${PaginationEnum.Size}`,
  })
}

/**
 * @description: Get order by id api
 * @param restaurantId
 * @param orderId
 */
export function getOrderByIdApi(orderId: string) {
  return defHttp.get({
    url: orderApi + `/${orderId}`,
  })
}
