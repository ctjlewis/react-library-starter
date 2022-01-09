import "styles";

import { FC, StrictMode } from "react";
import type { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default MyApp;
