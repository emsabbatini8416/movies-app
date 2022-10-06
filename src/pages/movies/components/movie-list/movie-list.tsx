import * as React from "react"

import type { MovieListProps } from "../../../../typings/pages"
import type { MovieResponsePayload } from "../../../../typings/services"
import { MoviesContext } from "../../contexts"
import { StyledContainer } from "./movie-list.styles"
import Movie from "../movie/movie"

const MovieList = (props: MovieListProps) => {
  const { handleSelectMovie } = props
  const { movies } = React.useContext(MoviesContext)

  return (
    <StyledContainer>
      { movies && movies.map((movie: MovieResponsePayload) => (
        <Movie key={movie.id} movie={movie} alt={movie.title} handleSelectMovie={handleSelectMovie}  />
      ))}
    </StyledContainer>
  )
}

export default MovieList
