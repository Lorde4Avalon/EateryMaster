import { BasicFetchResult } from '../../model/baseModel'
/**
 * @description: board interface model
 */
export interface BoardModel {
  id?: string
  name: string
  storeId: string
  status: number
}

/**
 * @description: Get board interface return value
 */
export type GetBoardListResultModel = BasicFetchResult<BoardModel>
