export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type PaginatedUsers = {
  totalCount: number;
  users: User[];
};
