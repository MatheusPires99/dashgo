import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { AuthLayout, DefaultLayout } from '../components/_layouts';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const userIsAuthenticated = asPath !== '/';

  const Layout = userIsAuthenticated ? DefaultLayout : AuthLayout;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
