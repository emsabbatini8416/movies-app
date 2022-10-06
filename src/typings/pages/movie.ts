import * as React from "react"

import type { MovieResponsePayload } from "../services"

export interface MoviesContextValues {
  movies: MovieResponsePayload[]
  setMovies: (movies: MovieResponsePayload[]) => void
}

export interface MoviesProviderProps { }

export interface MovieSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}