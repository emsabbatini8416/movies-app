
import type { MovieResponsePayload } from "../../typings/services"

import MovieList from "./components/movie-list"
import MovieSearch from "./components/movie-search"
import { MoviesProvider } from "./contexts"
import { useMovieList } from "./movies-utils"

const MoviesPage = () => {

  const { data, status } = useMovieList()

  if (status === 'loading') return null

  const movies = data.results as MovieResponsePayload[]

  return (
    <MoviesProvider movies={movies}>
      <MovieSearch />
      <MovieList />
    </MoviesProvider>
  )
}

export default MoviesPage