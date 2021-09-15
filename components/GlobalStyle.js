import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    min-height: 100%;
  }

  body {
    background: radial-gradient(circle, ${rgba('#01355D', 1)} 0%, ${rgba('#001524', 1)} 100%);
    display: flex;
    font-family: 'Open Sans', sans-serif;

    #__next {
      flex: 1;
    }
  }
`

export default GlobalStyle
