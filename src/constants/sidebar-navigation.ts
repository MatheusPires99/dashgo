import { IconType } from 'react-icons';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

export type SidebarLink = {
  text: string;
  path: string;
  icon: IconType;
};

type SidebarItem = {
  title: string;
  links: SidebarLink[];
};

export default [
  {
    title: 'GERAL',
    links: [
      {
        text: 'Dashboard',
        path: '/dashboard',
        icon: RiDashboardLine,
      },
      {
        text: 'Usuários',
        path: '/users',
        icon: RiContactsLine,
      },
    ],
  },
  {
    title: 'AUTOMAÇÃO',
    links: [
      {
        text: 'Formulários',
        path: '/forms',
        icon: RiInputMethodLine,
      },
      {
        text: 'Automação',
        path: '/automation',
        icon: RiGitMergeLine,
      },
    ],
  },
] as SidebarItem[];
