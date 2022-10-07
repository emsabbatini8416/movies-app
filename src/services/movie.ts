import type { MovieResponsePayload } from '../typings/services'
import type { ServerResponse } from '../typings/utils'
import { formatResponse } from '../utils'
import { apiKey, ApiRoute, defaultHeaders, defaultInvalidApiKey } from './utils'

const popularMoviesApi = async () => {
  if (apiKey) {
    const url = `${ApiRoute.POPULAR_MOVIES}?api_key=${apiKey}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...defaultHeaders,
      },
    })

    const json = await formatResponse<ServerResponse<MovieResponsePayload[]>>(response)

    return json
  }

  return defaultInvalidApiKey
}

const searchMovieApi = async (debounceSearch: string) => {
  if (apiKey) {
    let url = `${ApiRoute.SEARCH_MOVIES}?api_key=${apiKey}`

    if (debounceSearch) url += `&query=${debounceSearch}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...defaultHeaders,
      },
    })

    const json = await formatResponse<ServerResponse<MovieResponsePayload[]>>(response)

    return json
  }

  return defaultInvalidApiKey
}

export { popularMoviesApi, searchMovieApi }
