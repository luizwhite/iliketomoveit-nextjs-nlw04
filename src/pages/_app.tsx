import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';

import GlobalStyle from '../styles/globals';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </NextAuthProvider>
      <GlobalStyle />
    </>
  );
};

export default MyApp;
