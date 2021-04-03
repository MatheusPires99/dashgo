import { ReactNode } from 'react';
import Link from 'next/link';

import { Button, Flex, Heading, Box, Icon, Table } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { Pagination } from '../Pagination';

type TableWrapperProps = {
  title: string;
  createButtonHref: string;
  createButtonText: string;
  children: ReactNode;
};

export function TableWrapper({
  title,
  createButtonHref,
  createButtonText,
  children,
}: TableWrapperProps) {
  return (
    <Box
      flex="1"
      borderRadius={8}
      bg="gray.800"
      p="8"
      overflow={['hidden', 'visible']}
    >
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          {title}
        </Heading>

        <Link href={createButtonHref} passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            {createButtonText}
          </Button>
        </Link>
      </Flex>

      <Table colorScheme="whiteAlpha">{children}</Table>

      <Pagination />
    </Box>
  );
}
