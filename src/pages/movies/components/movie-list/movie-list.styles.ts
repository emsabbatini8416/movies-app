import styled from 'styled-components'

export const StyledContainer = styled.div`
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const StyledMovie = styled.div`
  background-color: #3f51b5;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px;
  overflow: hidden;
  position: relative;
  width: 300px;
`

export const StyledImage = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`