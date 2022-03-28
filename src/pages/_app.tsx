import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  const handleRouteChange = (url: string) => {
    ;(window as unknown as { gtag: any }).gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <div className="text-light selection:bg-select">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
