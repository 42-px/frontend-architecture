import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const NormalizeCss = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    min-height: 100%;
  }
  html {
    height: 100%;
  }
  body {
    display: flex;
    width: 100%;
  }
  ${normalize}
`
