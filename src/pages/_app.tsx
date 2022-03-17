import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
