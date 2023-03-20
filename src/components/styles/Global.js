import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 7%);
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    margin:30px;
  }

  /* .container{
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin:0px;
  } */

  h1 {
    color: hsl(46, 65%, 52%);
    text-shadow: 0 0 30px rgba(1500, 200, 0, .95);
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    max-width: 100%;
    box-shadow: 0 0 12px rgba(0, 0, 0, .75);  
}
`

export default GlobalStyles
