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
    </HeroStyled>
  )
}

export default Hero

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
  cursor: pointer;
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
  :hover {
    transition: all 0.05s ease-out;
    filter: hue-rotate(25deg);
    transform: scale(1.02);
    mask: none;
    mask-composite: unset;
  }
  :active {
    transform: scale(1);
    color: white;
    background: black;
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
