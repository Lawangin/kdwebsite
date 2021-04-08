import '../styles/globals.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `

const theme = {
  colors: {
    primary: '#024126',
    secondary: '#80A093',
    tertiary: '#62011D',
  },
  font: {
    logo: 'Luminari',
    main: 'helvetica',
  },
}

function MyApp({ Component, pageProps }) {
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
