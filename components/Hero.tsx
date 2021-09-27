import styled from 'styled-components'
import Image from 'next/image'

const Hero = () => {
  return (
    <HeroStyled>
      <HeroInfo>
        <HeroText>
          <h1>
            I am an Industrial Designer that insterested at
            <span> UX Design, 3D Modelling, and Animation.</span>
          </h1>
          <h3>I Looking forward to working with you!</h3>
        </HeroText>
        <ButtonStyled>Let&apos;s Rock</ButtonStyled>
      </HeroInfo>
      <HeroPhotoStyled>
        <div className='hero-photo-container'>
          <div>
            <Image
              src='/hero-asset1.png'
              width='901'
              height='867.39'
              alt='hero-asset1'
            />
          </div>
          <div className='hero-photo'>
            <Image
              src='/hero-photo.png'
              width='595.55'
              height='755.78'
              alt='hero-asset1'
            />
          </div>
          <div className='hero-asset1'>
            <Image src='/asset1.png' width='240' height='240' alt='asset1' />
          </div>
          <div className='hero-asset2'>
            <Image src='/asset2.png' width='180' height='180' alt='asset2' />
          </div>
          <div className='hero-asset3'>
            <Image src='/asset3.png' width='180' height='180' alt='asset3' />
          </div>
        </div>
      </HeroPhotoStyled>
    </HeroStyled>
  )
}

export default Hero

export const HeroPhotoStyled = styled.div`
  position: absolute;
  top: 93px;
  left: 0;
  width: 901px;
  height: 867.39px;
  .hero-photo-container {
    position: relative;
    width: 100%;
  }
  .hero-photo-container > div {
    position: absolute;
  }
  .hero-photo {
    left: 270px;
    top: 50px;
    z-index: 2;
  }
  .hero-asset1 {
    left: 230px;
    top: 200px;
  }
  .hero-asset2 {
    right: -830px;
    top: 100px;
    z-index: 1;
  }
  .hero-asset3 {
    right: 80px;
    top: 40px;
    z-index: 1;
  }
`

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: auto;
`
export const HeroInfo = styled.div`
  width: 608px;
  height: 721px;
  z-index: 2;
`

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.font_color1};
  width: 204px;
  height: 70px;
  position: relative;
  border: none;
  border-radius: 100px;
  background: white;
  font-family: 'Poppins';
  font-size: 23px;
  font-weight: 600;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100px;
    border: 5px solid transparent;
    background: linear-gradient(
        0deg,
        rgba(66, 0, 255, 0.8) 0%,
        rgba(184, 184, 184, 0.17970938375350143) 83%
      )
      border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`
export const HeroText = styled.div`
  padding-top: 50px;
  width: 608px;
  height: 592px;
  color: ${(props) => props.theme.colors.font_color1};
  h1 {
    font-size: 3rem;
    font-weight: 400;
  }
  span {
    font-size: 4rem;
    font-weight: 600;
  }
  h3 {
    margin-top: 45px;
    font-size: 1.125rem;
    font-weight: 400;
  }
`
