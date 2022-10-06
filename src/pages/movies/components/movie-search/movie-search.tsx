import * as React from "react"

import { MoviesContext } from "../../contexts"
import { useSearchMovie } from "../../movies-utils"
import { StyledContainer, StyledInputText } from "./movie-search.styles"

const MovieSearch = () => {
  const { setMovies } = React.useContext(MoviesContext)

  const { handleChange } = useSearchMovie(setMovies)

  return (
    <StyledContainer>
      <StyledInputText type="search" placeholder="Search Movie..." onChange={handleChange} />
    </StyledContainer>
  )
} 

export default MovieSearch
