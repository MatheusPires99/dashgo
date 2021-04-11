import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '../styles/theme';
import { AuthLayout, DefaultLayout } from '../components/_layouts';
import { SidebarDrawerProvider } from '../hooks';
import { makeServer } from '../services';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const userIsAuthenticated = asPath !== '/';

  const Layout = userIsAuthenticated ? DefaultLayout : AuthLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
