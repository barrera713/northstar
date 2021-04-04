import 'antd/dist/antd.css'; 
import GlobalStyle from '@uikit/globalStyles';
import './styles.css'; 
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';

function MyApp({ Component, pageProps }: AppProps ) {
  return <>
    <GlobalStyle />
    <Component { ...pageProps } />
  </>
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
