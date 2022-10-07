import * as React from 'react'

import type { MovieResponsePayload } from '../services'

export interface MoviesContextValues {
  movies: MovieResponsePayload[]
  setMovies: (movies: MovieResponsePayload[]) => void
}

export interface MoviesProviderProps {}

export interface MovieListProps {
  handleSelectMovie: (movie: MovieResponsePayload) => void
}

export interface MovieSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface MovieDetailProps {
  movie: MovieResponsePayload
}

export interface MovieProps extends MovieDetailProps {
  handleSelectMovie?: MovieListProps['handleSelectMovie']
  alt: string
}
