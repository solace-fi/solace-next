import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import Script from 'next/script'
// import { useEffect } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // const router = useRouter()

  // const handleRouteChange = (url: string) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //   ;(window as unknown as { gtag: any }).gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
  //     page_path: url,
  //   })
  // }

  // useEffect(() => {
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  // const location = useRouter()
  // useEffect(() => {
  //   console.log(location.pathname)
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //   ;(window as unknown as { gtag: any })?.gtag?.(
  //     'config',
  //     process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  //     {
  //       page_title: location.pathname,
  //       page_path: location.pathname,
  //     }
  //   )
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location])

  return (
    <>
      <Head>
        <title>solace° • Decentralized Coverage Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="text-light bg-light relative overflow-x-hidden scroll-smooth">
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${
            process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string
          }`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}');`}
        </Script>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
