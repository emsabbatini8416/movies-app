import { HttpCodeResponsePayload, ServerResponse } from '../../typings/utils'
import { HttpCode } from '../../utils'

const apiKey = process.env.REACT_APP_API_KEY || ''

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

const defaultInvalidApiKey: ServerResponse<HttpCodeResponsePayload> = {
  page: null,
  results: { code: HttpCode.BAD_REQUEST },
  total_pages: null,
  total_results: null,
  status_code: HttpCode.BAD_REQUEST,
  status_message: 'BAD_REQUEST',
}

export { apiKey, defaultHeaders, defaultInvalidApiKey }
