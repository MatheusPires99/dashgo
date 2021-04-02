import { Box, Button, HStack } from '@chakra-ui/react';

import { PAGINATION } from '../constants';

export function Pagination() {
  return (
    <HStack spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        {PAGINATION.map(item => (
          <Button
            key={item.page}
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            bg={!item.selected && 'gray.700'}
            _hover={
              !item.selected && {
                bg: 'gray.500',
              }
            }
            disabled={item.page === 1}
            _disabled={
              item.page === 1 && {
                bg: 'pink.500',
                cursor: 'default',
              }
            }
          >
            {item.page}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
}
