import { ReactNode } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box>
      <Header />

      <Flex as="main" w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        {children}
      </Flex>
    </Box>
  );
}
