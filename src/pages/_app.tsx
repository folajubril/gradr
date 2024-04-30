import React, { ReactElement } from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from 'next';
import { QueryClient, Hydrate, QueryClientProvider } from 'react-query';

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>

  <Component {...pageProps} />
  </Hydrate>
  </QueryClientProvider>
);
}
