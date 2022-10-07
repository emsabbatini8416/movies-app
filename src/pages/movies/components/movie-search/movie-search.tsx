import type { MovieSearchProps } from '../../../../typings/pages'

import { Input } from '../../../../components'
import { StyledContainer } from './movie-search.styles'

const MovieSearch = (props: MovieSearchProps) => {
  const { handleChange } = props

  return (
    <StyledContainer>
      <Input type="search" placeholder="Search Movie..." onChange={handleChange} />
    </StyledContainer>
  )
}

export default MovieSearch
