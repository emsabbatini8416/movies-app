import type { ServerResponse } from '../typings/utils'

async function formatResponse<T extends ServerResponse<unknown>>(response: Response) {
  try {
    const json = (await response.json()) as T

    return json
  } catch {
    const error = {
      page: null,
      results: null,
      total_pages: null,
      total_results: null,
      status_code: null,
      status_message: null,
    } as T

    return error
  }
}

export default formatResponse
