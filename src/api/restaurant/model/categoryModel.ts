import { BasicFetchResult } from '../../model/baseModel'
/**
 * @description: category interface model
 */
export interface CategoryModel {
  id?: string | number
  name: string
  storeId: string | number
}

/**
 * @description: Get category interface return value
 */
export type GetCategoryListResultModel = BasicFetchResult<CategoryModel>
