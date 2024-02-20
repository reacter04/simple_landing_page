import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
   box-sizing: border-box;
}


 body {
    font-family: Montserrat, sans-serif;
    background-color: ${({theme}) => theme.colors.body};
 }
`;

export default GlobalStyle;
