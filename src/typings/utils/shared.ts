import { HttpCode } from '../../utils'

export interface ServerResponse<T> {
  page: number
  results: T
  total_results: number
  total_pages: number
  status_message: string
  status_code: number
}

export interface HttpCodeResponsePayload {
  code: HttpCode
}
