import '../styles/globals.css';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Times New Roman', serif
    font-size: 64px;
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
