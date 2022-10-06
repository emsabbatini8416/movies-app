import * as React from "react";

import type { MoviesContextValues, MoviesProviderProps } from "../../../../typings/pages";
import type { MovieResponsePayload } from "../../../../typings/services";

const MoviesContext = React.createContext<MoviesContextValues>(null);

const MoviesProvider = (props: MoviesProviderProps) => {
  const { children, movies: popularMovies } = props

  const [movies, setMovies] = React.useState<MovieResponsePayload[]>(popularMovies)

  const value: MoviesContextValues = {
    movies,
    setMovies
  }

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}

export { MoviesProvider, MoviesContext }
