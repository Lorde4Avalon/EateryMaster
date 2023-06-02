import { BasicFetchResult } from '../../model/baseModel'
/**
 * @description: Bill interface model
 */
export interface BillModel {
  id?: string | number
  userId: string | number
  billTime: string
  amount: number
  userName: string
  boardId: string | number
  storeId: string | number
  detailSet: BillDetailModel[]
}

export interface BillDetailModel {
  id?: string | number
  name: string
  image?: string
  dishFlavor: string
  number: number
  amount: number
  dishId: string | number
}

/**
 * @description: Get Bill interface return value
 */
export type GetBillListResultModel = BasicFetchResult<OrderModel>
