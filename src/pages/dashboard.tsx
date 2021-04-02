import { Flex } from '@chakra-ui/react';

import { Header, SideBar } from '../components';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex as="main" w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
}
