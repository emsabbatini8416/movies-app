import styled from 'styled-components'

const Wrapper = styled.div`
  width: 1280px;
  max-width: 1280px;
  height: auto;
  background-color: white;

  @media (max-width: 767px) {
    max-width: 768px;
  }
`

export default Wrapper