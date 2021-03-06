import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    console.warn(
      'No Google Analytics ID found. Please set the `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` environment variable.'
    )
  }
  return (
    <>
      <GoogleAnalytics gaMeasurementId="G-XRDPNH8F33" />
      <Head>
        <title>solace° • Decentralized Coverage Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="text-light bg-light relative overflow-x-hidden scroll-smooth">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
