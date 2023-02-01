import Layout from '@components/layout'
import Head from 'next/head';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '@redux/store'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <meta name="description" content="Jetwild" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
};

export default App;
