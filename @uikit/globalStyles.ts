import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  h1, h2, h3, ul, li, * {
    color: #ECECED;
  }
  
  p {
    color: #b3b3b3;
  }
`;
 
export default GlobalStyle;