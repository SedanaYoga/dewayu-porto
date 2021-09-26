import { ReactNode } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <LayoutStyled>
      <Navbar />
      {children}
    </LayoutStyled>
  )
}

export default Layout

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
