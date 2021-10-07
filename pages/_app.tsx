import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style-type: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`
const theme: DefaultTheme = {
  colors: {
    primary_bg: '#fff',
    font_color1: '#36288C',
    headerColor_1: '#FFFFFF',
    headerColor_2:
      'linear-gradient(to right, rgba(3, 74, 212,0.25), rgba(0,0,0,0))',
    borderRadius1: '20px',
  },
}
