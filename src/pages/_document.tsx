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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="DeFi coverage protecting your capital" />
        <meta
          name="keywords"
          content="Ethereum, Solace, DeFi, Stablecoin, Protocol, Decentralized, Finance, Uniswap, Yearn, Aave, Compound, Curve, Sushiswap, Coverage, Crypto, Solace Finance, Solace Protocol"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://app.solace.fi/" />
        <meta property="og:title" content="solace° • Decentralized Coverage Protocol" />
        <meta property="og:description" content="DeFi coverage protecting your capital" />
        <meta property="og:image" content="%PUBLIC_URL%/images/sharing.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SolaceFi" />
        <meta property="twitter:url" content="https://app.solace.fi/" />
        <meta property="twitter:title" content="solace° • Decentralized Coverage Protocol" />
        <meta property="twitter:description" content="DeFi coverage protecting your capital" />
        <meta property="twitter:image" content="%PUBLIC_URL%/images/sharing.png"></meta>
      </Head>
      <body>
        <Main /> <NextScript />
      </body>
    </Html>
  )
}
