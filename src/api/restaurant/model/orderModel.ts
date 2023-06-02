import { BasicFetchResult } from '../../model/baseModel'
/**
 * @description: Order interface model
 */
export interface OrderModel {
  id?: string | number
  userId: string | number
  orderTime: string
  amount: number
  userName: string
  boardId: string | number
  storeId: string | number
  detailSet: OrderDetailModel[]
}

export interface OrderDetailModel {
  id?: string | number
  name: string
  image?: string
  dishFlavor: string
  number: number
  amount: number
  dishId: string | number
}

/**
 * @description: Get Order interface return value
 */
export type GetOrderListResultModel = BasicFetchResult<OrderModel>
