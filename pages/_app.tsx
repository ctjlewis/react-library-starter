import "styles";

import { FC, StrictMode } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
