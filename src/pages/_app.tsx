import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
