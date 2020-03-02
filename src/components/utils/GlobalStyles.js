import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding:0;
    height:100vh;
    width: 100vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`
