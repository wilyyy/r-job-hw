import '../styles/globals.css';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');

  html {
    font-family: 'Times New Roman';
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ramani React Assessment</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
