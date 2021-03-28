import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../theme';

import { useTheme } from '../hooks/theme';
import Controls from '../components/Controls';

import GlobalStyle from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [theme, toggleTheme, mountedComponent] = useTheme();

  const [providerTheme, setProviderTheme] = useState(
    theme === 'light' ? lightTheme : darkTheme,
  );

  useEffect(() => {
    setProviderTheme(theme === 'light' ? lightTheme : darkTheme);
  }, [theme]);

  return !mountedComponent ? (
    <div />
  ) : (
    <>
      <ThemeProvider theme={providerTheme}>
        <NextAuthProvider session={pageProps.session}>
          <Component {...pageProps} />
        </NextAuthProvider>
        {router.pathname !== '/login' && (
          <Controls theme={theme} toggleTheme={toggleTheme} />
        )}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
