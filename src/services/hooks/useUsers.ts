import { useQuery } from 'react-query';

import { User } from '../../types';
import api from '../api';

async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');
  const usersData = data.users as User[];

  const users = usersData.map(user => {
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
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds,
  });
}
