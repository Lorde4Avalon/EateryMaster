import { GetRestaurantListResultModel, RestaurantModel } from './model/restaurantModel'
import { defHttp } from '/@/utils/http/axios'

//pagination type page and size
enum PaginationEnum {
  Page = '1',
  Size = '10',
}

const restaurantApi = '/store'

/**
 * @description: Get restaurant list api
 */
export function getRestaurantListApi() {
  return defHttp.get<GetRestaurantListResultModel>({
    url: restaurantApi + `/${PaginationEnum.Page}/${PaginationEnum.Size}`,
  })
}

/**
 * @description: Get restaurant by id api
 * @param restaurantId
 */
export function getRestaurantByIdApi(restaurantId: string) {
  return defHttp.get<RestaurantModel>({ url: restaurantApi, params: { id: restaurantId } })
}

/**
 * @description: Add restaurant api
 */
export function addRestaurantApi(params: RestaurantModel) {
  return defHttp.post({ url: restaurantApi, params })
}

/**
 * @description: Update restaurant api
 * @param params
 */
export function updateRestaurantApi(params: RestaurantModel) {
  return defHttp.put({ url: restaurantApi, params })
}

/**
 * @description: Delete restaurant api
 * @param params
 */
export function deleteRestaurantApi(restaurantId: number) {
  return defHttp.delete({ url: restaurantApi + `/${restaurantId}` })
}
