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
import { useQuery } from 'react-query';
import { RiPencilLine } from 'react-icons/ri';

import { TableWrapper } from '../../components';
import { User } from '../../types';
import { api } from '../../services';

export default function UserList() {
  const { data, isLoading, error } = useQuery<User[]>(
    'users',
    async () => {
      const response = await api.get('users');

      const users = response.data.users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        };
      });

      return users;
    },
    {
      staleTime: 1000 * 5,
    },
  );

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <TableWrapper
      title="Usuários"
      createButtonHref="/users/form"
      createButtonText="Criar usuário"
      isLoading={isLoading}
      isErrored={!!error}
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
        {data?.map(user => (
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
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                >
                  Editar
                </Button>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </TableWrapper>
  );
}
