import type { AppProps } from 'next/app';

import StoreProvider from '../providers/storeProvider/storeProvider';
import ResponsiveProvider from '../providers/responsiveProvider/responsiveProvider';

import '../styles/font/stylesheet.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps}>
      <ResponsiveProvider>
        <Component {...pageProps} />
      </ResponsiveProvider>
    </StoreProvider>
  );
}

export default MyApp;
