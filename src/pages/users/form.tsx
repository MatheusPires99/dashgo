import { VStack, SimpleGrid } from '@chakra-ui/react';

import { FormWrapper } from '../../components';
import { Input } from '../../components/Form';

export default function UserForm() {
  return (
    <FormWrapper title="     Criar usuário">
      <VStack spacing="8">
        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
          <Input name="name" label="Nome completo" />
          <Input name="email" type="email" label="E-mail" />
        </SimpleGrid>

        <SimpleGrid minChildWidth={240} spacing="8" w="100%">
          <Input name="password" type="password" label="Senha" />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação de senha"
          />
        </SimpleGrid>
      </VStack>
    </FormWrapper>
  );
}
