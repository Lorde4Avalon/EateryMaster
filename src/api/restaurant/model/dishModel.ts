import { BasicFetchResult } from '../../model/baseModel'
/**
 * @description: dish interface model
 */
export interface DishModel {
  id?: string
  categoryId: string | number
  categoryName?: string
  name: string
  description: string
  price: number
  image?: string
  status: number
}

/**
 * @description: Get dish interface return value
 */
export type GetDishListResultModel = BasicFetchResult<DishModel>
