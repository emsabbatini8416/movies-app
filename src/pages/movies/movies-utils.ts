import * as React from "react"
import { useQuery } from "react-query"

import { ApiRoute, popularMoviesApi, searchMovieApi } from "../../services"
import { useDebounce, useQueryCache } from "../../hooks"
import { MovieResponsePayload } from "../../typings/services"
import { ServerResponse } from "../../typings/utils"

const useMovieList = () => {

  const queryResult = useQuery(ApiRoute.POPULAR_MOVIES, () => popularMoviesApi())

  return queryResult

}

const useSearchMovie = (setMovies: (movies: MovieResponsePayload[]) => void) => {
  const [query, setQuery] = React.useState<string>('')

  const debounceQuery = useDebounce(query, 500)

  const queryResult = useQuery([ApiRoute.SEARCH_MOVIES, debounceQuery], () => searchMovieApi(debounceQuery), { enabled: !!debounceQuery })

  const queryCache = useQueryCache<ServerResponse<MovieResponsePayload[]>>(ApiRoute.POPULAR_MOVIES)

  const { data, isLoading, status } = queryResult

  React.useEffect(() => {

    if (data && !isLoading && !!debounceQuery ) {
      const results = data.results as MovieResponsePayload[]
      setMovies(results)
    } else {
      setMovies(queryCache.state.data.results)
    }

  }, [data, isLoading, setMovies, queryCache, debounceQuery])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setQuery(value)
  }

  return {
    data,
    status,
    handleChange
  }

}

export { useMovieList, useSearchMovie }
