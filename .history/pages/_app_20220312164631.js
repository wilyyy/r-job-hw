import '../styles/globals.css';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ramani React Assessment</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
