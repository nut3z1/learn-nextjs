import '../styles/globals.css'
import Head from 'next/head'
import { withLayout } from '@containers/Layout'
import { AppPropsWithLayout } from '@interfaces/commom'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  const Layout = Component.getLayout ?? withLayout

  return <div className='root-app'>
    <Head>
      <title>Hoc code</title>
      <link rel='icon' href='/vercel.svg' />
    </Head>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </div>
}

export default MyApp