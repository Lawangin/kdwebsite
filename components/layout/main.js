import Image from 'next/image'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-size: clamp(2rem, 5vw, 8rem);
  color: white;
  font-family: ${({ theme }) => theme.font.main};
  position: absolute;
  z-index: 1;
  margin: 5% 10%;
`

const ImageContainer = styled.div`
  width: clamp(200px, 100%, 1400px);
  z-index: -1;
  overflow: hidden;
`

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  // position: absolute;
  // z-index: 1;
  // margin: 5% 10%;
`

const StyledButtonText = styled.p`
  font-family: ${({ theme }) => theme.font.main};
`

const main = () => {
  return (
    <>
      <StyledHeader>
        Hello, we are
        <br />
        Graphic Designers <br />
        Specializing in <br />
        Logo designs
      </StyledHeader>
      <StyledButton>
        <StyledButtonText>GET IN TOUCH</StyledButtonText>
      </StyledButton>
      <ImageContainer>
        <Image
          src='/images/sliderimg1@2x.png'
          alt='Slider logo image one'
          height={765}
          width={1363}
          layout='intrinsic'
        />
      </ImageContainer>
    </>
  )
}

export default main
