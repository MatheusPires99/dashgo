import { Button, Stack, Flex } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form';
import { SIGN_IN_FORM_SCHEMA } from '../schemas';

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(SIGN_IN_FORM_SCHEMA),
  });

  const { errors, isSubmitting } = formState;

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
          error={errors.email}
          {...register('email')}
        />

        <Input
          name="password"
          type="password"
          label="Senha"
          error={errors.password}
          {...register('password')}
        />
      </Stack>

      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        size="lg"
        isLoading={isSubmitting}
      >
        Entrar
      </Button>
    </Flex>
  );
}
