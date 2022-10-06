
import React from "react"

import MovieList from "./components/movie-list"
import MovieSearch from "./components/movie-search"
import { MoviesProvider } from "./contexts"
import { useMovieList, useSearchMovie } from "./movies-utils"

const MoviesPageContent = () => {

  const { status: statusMovieList } = useMovieList()

  const { handleChange, status: statusMovieSearch } = useSearchMovie()

  return (
    <React.Fragment>
      <MovieSearch handleChange={handleChange} />
      {(statusMovieList !== 'loading' && statusMovieSearch !== 'loading') && <MovieList />}
    </React.Fragment>
  )
}

const MoviesPage = () => (
  <MoviesProvider>
    <MoviesPageContent />
  </MoviesProvider>
)

export default MoviesPage
