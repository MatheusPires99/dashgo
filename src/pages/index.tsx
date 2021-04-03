import { Button, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form';

export default function SignIn() {
  return (
    <>
      <Stack spacing="4">
        <Input name="email" type="email" label="E-mail" />

        <Input name="password" type="password" label="Senha" />
      </Stack>

      <Button type="submit" mt="6" colorScheme="pink" size="lg">
        Entrar
      </Button>
    </>
  );
}
