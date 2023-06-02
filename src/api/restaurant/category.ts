import { GetCategoryListResultModel, categoryModel } from './model/categoryModel'
import { defHttp } from '/@/utils/http/axios'

//pagination type page and size
enum PaginationEnum {
  Page = '1',
  Size = '10',
}

const categoryApi = '/category'

/**
 * @description: Get category list api
 * @param restaurantId
 */
export function getCategoryListApi(restaurantId: string) {
  return defHttp.get<GetCategoryListResultModel>({
    url: categoryApi + `/${restaurantId}`,
  })
}

/**
 * @description: Add category api
 * @param params
 */
export function addCategoryApi(params: categoryModel) {
  return defHttp.post({ url: categoryApi, params })
}

/**
 * @description: Update category api
 * @param params
 * @param categoryId
 */
export function updateCategoryApi(params: categoryModel, categoryId: number) {
  return defHttp.put({ url: categoryApi + `/${categoryId}`, params })
}

/**
 * @description: Delete category api
 * @param categoryId
 */
export function deleteCategoryApi(categoryId: number) {
  return defHttp.delete({ url: categoryApi + `/${categoryId}` })
}
