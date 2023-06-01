import { BasicFetchResult } from '../../model/baseModel'

/**
 * @description: restaurant interface model
 */
export interface RestaurantModel {
  id?: string
  name: string
  address: string
  description: string
  employeeId: string
  image?: string
  openTime?: string
  closeTime?: string
}

/**
 * @description: Get restaurant interface return value
 */
//interface combine with basic fetch result
export type GetRestaurantListResultModel = BasicFetchResult<RestaurantModel>
