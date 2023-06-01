import { GetBoardListResultModel, BoardModel } from './model/boardModel'
import { defHttp } from '/@/utils/http/axios'

//pagination type page and size
enum PaginationEnum {
  Page = '1',
  Size = '10',
}

const boardApi = '/board'

/**
 * @description: Get board list api
 * @param boardId
 */
export function getBoardListApi(boardId: string) {
  return defHttp.get<GetBoardListResultModel>({
    url: boardApi + `${boardId}` + `/${PaginationEnum.Page}/${PaginationEnum.Size}`,
  })
}

/**
 * @description: Add board api
 * @param params
 */
export function addBoardApi(params: BoardModel) {
  return defHttp.post({ url: boardApi, params })
}

/**
 * @description: Update board api
 * @param params
 * @param boardId
 */
export function updateBoardApi(params: BoardModel, boardId: number) {
  return defHttp.put({ url: boardApi + `/${boardId}`, params })
}

/**
 * @description: Delete board api
 * @param boardId
 */
export function deleteBoardApi(boardId: number) {
  return defHttp.delete({ url: boardApi + `/${boardId}` })
}
