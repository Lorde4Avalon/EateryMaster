import { DishModel, GetDishListResultModel } from './model/dishModel'
import { defHttp } from '/@/utils/http/axios'

//pagination type page and size
enum PaginationEnum {
  Page = '1',
  Size = '10',
}

const dishApi = '/dish'

export function getDishListApi(categoryId: string) {
  return defHttp.get<GetDishListResultModel>({
    url: dishApi + `/${categoryId}` + `/${PaginationEnum.Page}/${PaginationEnum.Size}`,
  })
}

export function getDishByIdApi(dishId: string) {
  return defHttp.get<DishModel>({ url: dishApi, params: { id: dishId } })
}

export function addDishApi(params: DishModel) {
  return defHttp.post({ url: dishApi, params })
}

export function updateDishApi(params: DishModel) {
  return defHttp.put({ url: dishApi, params })
}

export function deleteDishApi(dishId: string) {
  return defHttp.delete({ url: dishApi + `/${dishId}` })
}
