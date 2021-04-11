import { Box, Stack, HStack } from '@chakra-ui/react';

import { PAGINATION } from '../../constants';
import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        {PAGINATION.map(item => (
          <PaginationItem
            key={item.page}
            number={item.page}
            isCurrent={item.selected}
          />
        ))}
      </HStack>
    </Stack>
  );
}
