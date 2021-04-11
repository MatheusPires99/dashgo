import { Flex, Spinner as ChakraSpinner } from '@chakra-ui/react';

export function Spinner() {
  return (
    <Flex justify="center">
      <ChakraSpinner />
    </Flex>
  );
}
