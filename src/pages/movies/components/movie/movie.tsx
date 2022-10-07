import type { MovieProps } from '../../../../typings/pages'
import { IMAGE_URL } from '../../../../utils'
import { StyledImage, StyledMovie } from './movie.styles'

const Movie = (props: MovieProps) => {
  const { movie, alt, handleSelectMovie } = props

  const imgUrl = `${IMAGE_URL}${movie.poster_path}`

  return (
    <StyledMovie onClick={() => handleSelectMovie(movie)}>
      <StyledImage src={imgUrl} alt={alt} />
    </StyledMovie>
  )
}

export default Movie
