export interface BasicPageParams {
  page: number
  pageSize: number
}

export interface BasicFetchResult<T> {
  content: T[]
  totalElements: number
  totalPages: number
  [key: string]: any
}
