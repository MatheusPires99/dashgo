import { Button } from '@chakra-ui/react';

type PaginationItemProps = {
  page: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
};

export function PaginationItem({
  page,
  isCurrent,
  onPageChange,
}: PaginationItemProps) {
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
      disabled={isCurrent}
      _disabled={{
        bg: 'pink.500',
        cursor: 'default',
      }}
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  );
}
