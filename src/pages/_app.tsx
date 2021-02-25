import { AppProps } from 'next/app';

import { ChallengesProvider } from '../hooks/challenges';

import GlobalStyle from '../styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
      <GlobalStyle />
    </>
  );
};

export default MyApp;
