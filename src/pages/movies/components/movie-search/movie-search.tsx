import * as React from "react"

import { Input } from "../../../../components"
import { MoviesContext } from "../../contexts"
import { useSearchMovie } from "../../movies-utils"
import { StyledContainer } from "./movie-search.styles"

const MovieSearch = () => {
  const { setMovies } = React.useContext(MoviesContext)

  const { handleChange } = useSearchMovie(setMovies)

  return (
    <StyledContainer>
      <Input type="search" placeholder="Search Movie..." onChange={handleChange} />
    </StyledContainer>
  )
} 

export default MovieSearch
