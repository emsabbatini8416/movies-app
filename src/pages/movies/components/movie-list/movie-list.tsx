import * as React from "react"

import type { MovieResponsePayload } from "../../../../typings/services"
import { StyledContainer, StyledMovie, StyledImage } from "./movie-list.styles"
import { IMAGE_URL } from "../../../../utils"
import { MoviesContext } from "../../contexts"


const MovieList = () => {

  const { movies } = React.useContext(MoviesContext)

  return (
    <StyledContainer>
      { movies && movies.map((movie: MovieResponsePayload) => (
        <StyledMovie>
          <StyledImage src={`${IMAGE_URL}${movie.poster_path}`} />
        </StyledMovie>
      ))}
    </StyledContainer>
  )
}

export default MovieList
