import { useState, useEffect, ReactComponentElement } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HireMe from '../components/svg/HireMe'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top)
      setShow(document.body.getBoundingClientRect().top > scrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPos])

  return (
    <ContainerStyled isShow={show}>
      <NavBarStyled>
        <LogoStyled>
          <p className='logo-text'>DEWA</p>
        </LogoStyled>
        <MenuStyled>
          <ul>
            <li>
              <Link href='/'>ABOUT ME</Link>
            </li>
            <li>
              <Link href='/works'>MY WORKS</Link>
            </li>
            <li>
              <Link href='/cv'>MY CV</Link>
            </li>
          </ul>
        </MenuStyled>
        <HireMeStyled>
          <HireMe />
        </HireMeStyled>
      </NavBarStyled>
    </ContainerStyled>
  )
}

export default Navbar

interface ContainerProps {
  isShow: boolean
}

const ContainerStyled = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 1600px;
  min-height: 70px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    160deg,
    rgba(110, 191, 244, 0.1),
    rgba(249, 252, 255, 0.64),
    rgba(255, 255, 255, 0.99)
  );
  backdrop-filter: blur(0.5rem);
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  transition: all 0.5s;
  transform: translateY(${(props) => !props.isShow && '-100%'});
`

const NavBarStyled = styled.div`
  width: 1500px;
  margin: auto;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: blue; */
`

const LogoStyled = styled.div`
  width: 66px;
  height: 33px;
  /* background: red; */
  font-size: 1.35rem;
  font-weight: 700;
  .logo-text {
    background: linear-gradient(45deg, #4b73ff, #be00b7);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const MenuStyled = styled.div`
  width: 410px;
  /* background: blue; */
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 1rem;
    font-weight: 600;
  }
`

const HireMeStyled = styled.div`
  width: 127px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
`
