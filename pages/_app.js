import 'antd/dist/antd.css'; 
import GlobalStyle from '@uikit/globalStyles.ts';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Component 
    {...pageProps} 
    />
  </>
}

export default MyApp
