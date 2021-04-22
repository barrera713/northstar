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

  .ant-btn-primary,.ant-back-top-content {
    background: #944dff;
    border-color: #944dff;
    &:hover,&:focus {
      background: #8533ff;
      border-color: #8533ff;
    }
  }
  
`;
 
export default GlobalStyle;