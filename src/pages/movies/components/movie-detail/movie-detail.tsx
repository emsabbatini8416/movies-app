import type { MovieDetailProps } from "../../../../typings/pages"
import Movie from "../movie"
import { StyledContainer, StyledRow, StyledOverview, StyledDetails, StyledTitleMain, StyledTitle, StyledItem } from "./movie-detail.styles"

const MovieDetail = (props: MovieDetailProps) => {
  const { title, overview, original_title, release_date, adult, vote_average, vote_count } = props.movie

  return (
    <StyledContainer>
      <StyledTitleMain>{title}</StyledTitleMain>
      <StyledRow>
        <Movie movie={props.movie} alt={title} />
        <StyledDetails>
          <StyledItem>
            Original Title: {original_title}
          </StyledItem>
          <StyledItem>
            Released: {release_date}
          </StyledItem>
          <StyledItem>
            Public: {adult ? 'Adult' : 'Everyone'}
          </StyledItem>
          <StyledItem>
            Rating: {vote_average}
          </StyledItem>
          <StyledItem>
            Votes Qty: {vote_count}
          </StyledItem>
        </StyledDetails>
      </StyledRow>
      <StyledRow>
        <StyledOverview>
          <StyledTitle>
            Overview:
          </StyledTitle>
          {overview}
        </StyledOverview>
      </StyledRow>
    </StyledContainer>
  )
}

export default MovieDetail