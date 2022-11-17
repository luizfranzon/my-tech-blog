import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyTech | Seu blog de tecnologia!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
