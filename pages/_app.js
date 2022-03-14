import '../styles/globals.css';
import Head from 'next/head';
import AppProvider from '@/utils/AppProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Ramani React Assessment</title>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
