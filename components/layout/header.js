import styled from 'styled-components'

const StyledContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
`

const StyledUl = styled.ul`
  display: flex;
  padding: 1.5rem;
`

const StyledLi = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  font-size: 20px;
  &:hover {
    color: white;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
`

const StyledLogo = styled.span`
  font-family: ${({ theme }) => theme.font.logo};
  font-size: 60px;
`

const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.font.main};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`

const header = () => {
  return (
    <StyledContainer>
      <StyledUl>
        <StyledLi>Home</StyledLi>
        <StyledLi>Portfolio</StyledLi>
      </StyledUl>
      <LogoContainer>
        <StyledSpan>Kashfi</StyledSpan>
        <StyledLogo>KD</StyledLogo>
        <StyledSpan>Design</StyledSpan>
      </LogoContainer>
      <StyledUl>
        <StyledLi>
          <a href='mailto:lawangin.khan@gmail.com'>Contact Us</a>
        </StyledLi>
        <StyledLi>About Us</StyledLi>
      </StyledUl>
    </StyledContainer>
  )
}

export default header
