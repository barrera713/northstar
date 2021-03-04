import 'antd/dist/antd.css'; 
import GlobalStyle from '@uikit/globalStyles.ts';
import './styles.css'; 

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Component 
    {...pageProps} 
    />
  </>
}

export default MyApp
