import React from 'react'

import { Modal } from '../../components'
import MovieDetail from './components/movie-detail'
import MovieList from './components/movie-list'
import MovieSearch from './components/movie-search'
import { MoviesProvider } from './contexts'
import { useMovieDetail, useMovieList, useSearchMovie } from './movies-utils'

const MoviesPageContent = () => {
  const { status: statusMovieList } = useMovieList()

  const { handleChange, status: statusMovieSearch } = useSearchMovie()

  const { showDetail, handleClose, movieSelected, handleSelectMovie } = useMovieDetail()

  return (
    <React.Fragment>
      <MovieSearch handleChange={handleChange} />
      {statusMovieList !== 'loading' && statusMovieSearch !== 'loading' && (
        <MovieList handleSelectMovie={handleSelectMovie} />
      )}
      {showDetail && movieSelected && (
        <Modal onClose={handleClose} isOpen={showDetail}>
          <MovieDetail movie={movieSelected} />
        </Modal>
      )}
    </React.Fragment>
  )
}

const MoviesPage = () => (
  <MoviesProvider>
    <MoviesPageContent />
  </MoviesProvider>
)

export default MoviesPage
