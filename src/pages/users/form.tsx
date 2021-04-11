import { useRouter } from 'next/router';

import { VStack, SimpleGrid } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormWrapper } from '../../components';
import { Input } from '../../components/Form';
import { USER_FORM_SCHEMA } from '../../schemas';
import { api, queryClient } from '../../services';

type UserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function UserForm() {
  const router = useRouter();

  const createUser = useMutation(
    async (user: UserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    },
  );

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(USER_FORM_SCHEMA),
  });

  const { errors, isSubmitting } = formState;

  const handleSubmitForm: SubmitHandler<UserFormData> = async value => {
    await createUser.mutateAsync(value);

    router.push('/users');
  };

  function handleCancel() {
    router.push('/users');
  }

  return (
    <FormWrapper
      title="Criar usuário"
      onSubmit={handleSubmit(handleSubmitForm)}
      onCancel={handleCancel}
      isLoading={isSubmitting}
    >
      <VStack spacing={['6', '8']}>
        <SimpleGrid minChildWidth={240} spacing={['6', '8']} w="100%">
          <Input
            name="name"
            label="Nome completo"
            error={errors.name}
            {...register('name')}
          />
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth={240} spacing={['6', '8']} w="100%">
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação de senha"
            error={errors.password_confirmation}
            {...register('password_confirmation')}
          />
        </SimpleGrid>
      </VStack>
    </FormWrapper>
  );
}
