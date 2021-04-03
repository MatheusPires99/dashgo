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
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

import { TableWrapper } from '../../components';

export default function UserList() {
  return (
    <TableWrapper title="Usuários" createButtonText="Criar usuário">
      <Thead>
        <Tr>
          <Th px="6" color="gray.300" w="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          <Th>Data de cadastro</Th>
          <Th w="8" />
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td px="6">
            <Box>
              <Text fontWeight="bold">Matheus Pires</Text>
              <Text fontSize="sm" color="gray.300">
                matheushenriquepires99@gmail.com
              </Text>
            </Box>
          </Td>
          <Td>04 de Abril, 2021</Td>
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
        </Tr>
        <Tr>
          <Td px="6">
            <Checkbox colorScheme="pink" />
          </Td>
          <Td px="6">
            <Box>
              <Text fontWeight="bold">Matheus Pires</Text>
              <Text fontSize="sm" color="gray.300">
                matheushenriquepires99@gmail.com
              </Text>
            </Box>
          </Td>
          <Td>04 de Abril, 2021</Td>
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
        </Tr>
      </Tbody>
    </TableWrapper>
  );
}
