import { useState } from 'react';
import Link from 'next/link';

import {
  Button,
  Box,
  Icon,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

import { TableWrapper } from '../../components';
import { useUsers } from '../../services/hooks';
import { api, queryClient } from '../../services';

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      },
    );
  }

  return (
    <TableWrapper
      title="Usuários"
      createButtonHref="/users/form"
      createButtonText="Criar usuário"
      isLoading={isLoading}
      isRefetching={isFetching}
      isErrored={!!error}
      totalItems={data?.totalCount}
      currentPage={page}
      onPageChange={setPage}
    >
      <Thead>
        <Tr>
          <Th px={['4', '4', '6']} color="gray.300" w="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isWideVersion && <Th>Data de cadastro</Th>}
          {isWideVersion && <Th w="8" />}
        </Tr>
      </Thead>

      <Tbody>
        {data?.users?.map(user => (
          <Tr key={user.id}>
            <Td px={['4', '4', '6']}>
              <Checkbox colorScheme="pink" />
            </Td>
            <Td px={['4', '4', '6']}>
              <Box>
                <Text fontWeight="bold">{user.name}</Text>
                <Text
                  fontSize="sm"
                  color="gray.300"
                  overflow={['hidden', 'visible']}
                  w={['90%', '100%']}
                  whiteSpace={['nowrap', 'normal']}
                  textOverflow={['ellipsis', 'normal']}
                >
                  {user.email}
                </Text>
              </Box>
            </Td>
            {isWideVersion && <Td>{user.createdAt}</Td>}
            {isWideVersion && (
              <Td>
                <Link href={`users/form/${user.id}`} passHref>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    onMouseEnter={() => handlePrefetchUser(user.id)}
                  >
                    Editar
                  </Button>
                </Link>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </TableWrapper>
  );
}
