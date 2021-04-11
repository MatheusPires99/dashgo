import { ReactNode, useMemo } from 'react';
import Link from 'next/link';

import {
  Button,
  Flex,
  Heading,
  Box,
  Icon,
  Table,
  Text,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import { Pagination, Spinner } from '..';

type TableWrapperProps = {
  title: string;
  createButtonHref: string;
  createButtonText: string;
  isLoading: boolean;
  isRefetching: boolean;
  isErrored: boolean;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  children: ReactNode;
};

export function TableWrapper({
  title,
  createButtonHref,
  createButtonText,
  isLoading,
  isRefetching,
  isErrored,
  totalItems,
  currentPage,
  onPageChange,
  children,
}: TableWrapperProps) {
  const renderTableContent = useMemo(() => {
    if (isLoading) {
      return <Spinner />;
    }

    if (isErrored) {
      return (
        <Flex justify="center">
          <Text>Falha ao obter os dados.</Text>
        </Flex>
      );
    }

    return (
      <>
        <Table colorScheme="whiteAlpha">{children}</Table>

        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </>
    );
  }, [children, currentPage, isErrored, isLoading, onPageChange, totalItems]);

  return (
    <Box
      flex="1"
      borderRadius={8}
      bg="gray.800"
      p="8"
      overflow={['hidden', 'visible']}
    >
      <Flex mb="8" justify="space-between" align="center">
        <Flex align="center">
          <Heading size="lg" fontWeight="normal">
            {title}
          </Heading>

          {!isLoading && isRefetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Flex>

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

      {renderTableContent}
    </Box>
  );
}
