import '../styles/globals.css';
import type { AppProps } from 'next/app';

import ThemeProvider from '../components/ThemeProvider';
import { RecoilRoot } from 'recoil';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading ...</div>}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default MyApp;
