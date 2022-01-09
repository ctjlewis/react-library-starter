import "styles";

import { FC, StrictMode } from "react";
import type { AppProps } from "next/app";
import { Footer } from "components/Footer";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="px-4 py-8">
        <Component {...pageProps} />
      </main>

      <Footer />
    </StrictMode>
  );
};

export default MyApp;
