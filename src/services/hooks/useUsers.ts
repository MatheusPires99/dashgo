import { useQuery } from 'react-query';

import { PaginatedUsers, User } from '../../types';
import api from '../api';

async function getUsers(page: number): Promise<PaginatedUsers> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  });
  const usersData = data.users as User[];
  const totalCount = Number(headers['x-total-count']);

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

  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
