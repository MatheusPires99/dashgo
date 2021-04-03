import { ReactNode } from 'react';

import { Button, Flex, Heading, Box, Icon, Table } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { Pagination } from '../Pagination';

type TableWrapperProps = {
  title: string;
  createButtonText: string;
  children: ReactNode;
};

export function TableWrapper({
  title,
  createButtonText,
  children,
}: TableWrapperProps) {
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          {title}
        </Heading>

        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="pink"
          leftIcon={<Icon as={RiAddLine} fontSize="20" />}
        >
          {createButtonText}
        </Button>
      </Flex>

      <Table colorScheme="whiteAlpha">{children}</Table>

      <Pagination />
    </Box>
  );
}
