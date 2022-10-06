import * as React from "react"
import { useQuery } from "react-query"

import { ApiRoute, popularMoviesApi, searchMovieApi } from "../../services"
import { useDebounce, useQueryCache } from "../../hooks"
import { MovieResponsePayload } from "../../typings/services"
import { ServerResponse } from "../../typings/utils"
import { MoviesContext } from "./contexts"

const useMovieList = () => {

  const { setMovies } = React.useContext(MoviesContext)

  const queryResult = useQuery(ApiRoute.POPULAR_MOVIES, () => popularMoviesApi())

  const { data, isLoading, status } = queryResult

  React.useEffect(() => {

    if (data && !isLoading) {
      const results = data.results as MovieResponsePayload[]
      setMovies(results)
    }

  }, [data, isLoading, setMovies])

  return {
    status
  }

}

const useSearchMovie = () => {

  const { setMovies } = React.useContext(MoviesContext)

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

const useMovieDetail = () => {
  const [showDetail, setShowDetail] = React.useState<boolean>(false)
  const [movieSelected, setMovieSelected] = React.useState<MovieResponsePayload>(null)

  const handleSelectMovie = (movie: MovieResponsePayload) => {
    setMovieSelected(movie)
    setShowDetail(true)
    window.scrollTo(0, 0)
  }

  const handleClose = () => {
    setShowDetail(false)
  }

  return {
    showDetail,
    movieSelected,
    handleSelectMovie,
    handleClose
  }
}

export { useMovieList, useSearchMovie, useMovieDetail }
