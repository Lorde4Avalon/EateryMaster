import { BasicFetchResult } from '../../model/baseModel'
/**
 * @description: Order interface model
 */
export interface OrderModel {
  id?: string | number
  name: string
  image?: string
  userId: string | number
  dishId: string | number
  dishFlavor: string
  number: number
  amount: number
  status: string | number
  boardId: string | number
  storeId: string | number
  createTime: string | null
}

/**
 * @description: Get Order interface return value
 */
export type GetOrderListResultModel = BasicFetchResult<OrderModel>
