import { ReactNode } from 'react';

import { Flex, Box, Heading, Divider, HStack, Button } from '@chakra-ui/react';

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Heading size="lg" fontWeight="normal">
        {title}
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <Box as="form">
        {children}

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button type="submit" colorScheme="pink">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
