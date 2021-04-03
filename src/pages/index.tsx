import { Button, Stack, Flex } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form';
import { signInFormSchema } from '../schemas';

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = value => {
    console.log(value);
  };

  return (
    <Flex as="form" onSubmit={handleSubmit(handleSignIn)} flexDir="column">
      <Stack spacing="4">
        <Input
          name="email"
          type="email"
          label="E-mail"
          error={formState.errors.email}
          {...register('email')}
        />

        <Input
          name="password"
          type="password"
          label="Senha"
          error={formState.errors.password}
          {...register('password')}
        />
      </Stack>

      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        size="lg"
        isLoading={formState.isSubmitting}
      >
        Entrar
      </Button>
    </Flex>
  );
}
