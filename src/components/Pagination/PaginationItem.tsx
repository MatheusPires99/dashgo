import { Button } from '@chakra-ui/react';

export function PaginationItem({ number, isCurrent }) {
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bg={!isCurrent && 'gray.700'}
      _hover={
        !isCurrent && {
          bg: 'gray.500',
        }
      }
      disabled={number === 1}
      _disabled={
        number === 1 && {
          bg: 'pink.500',
          cursor: 'default',
        }
      }
    >
      {number}
    </Button>
  );
}
