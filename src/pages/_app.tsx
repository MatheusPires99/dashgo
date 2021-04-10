import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { AuthLayout, DefaultLayout } from '../components/_layouts';
import { SidebarDrawerProvider } from '../hooks';
import { makeServer } from '../services';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const userIsAuthenticated = asPath !== '/';

  const Layout = userIsAuthenticated ? DefaultLayout : AuthLayout;

  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
