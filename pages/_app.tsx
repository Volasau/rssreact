import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../style/global.css';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorButton from '../components/btnTest';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <>
        <Head>
          <title> Products </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <ErrorButton />
      </>
    </ErrorBoundary>
  );
}
