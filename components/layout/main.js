import Image from 'next/image'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-size: clamp(2rem, 5rem, 8rem);
  color: white;
  font-family: ${({ theme }) => theme.font.main};
  position: absolute;
  margin: 5% 10%;
  z-index: 99;
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
      <Image
        src='/images/sliderimg1@2x.png'
        alt='Slider logo image one'
        height={765}
        width={1363}
        layout='intrinsic'
      />
    </>
  )
}

export default main
