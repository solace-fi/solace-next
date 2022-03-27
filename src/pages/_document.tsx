import { Html, Head, Main, NextScript } from 'next/document'
const GID = process.env.GOOGLE_ANALYTICS_ID as string

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GID}`} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GID}', { page_path: window.location.pathname });
          `,
          }}
        />
      </Head>
      <body>
        <Main /> <NextScript />
      </body>
    </Html>
  )
}
