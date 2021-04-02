import { IconType } from 'react-icons';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

type SidebarLink = {
  text: string;
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
        icon: RiDashboardLine,
      },
      {
        text: 'Usuários',
        icon: RiContactsLine,
      },
    ],
  },
  {
    title: 'AUTOMAÇÃO',
    links: [
      {
        text: 'Formulários',
        icon: RiInputMethodLine,
      },
      {
        text: 'Automação',
        icon: RiGitMergeLine,
      },
    ],
  },
] as SidebarItem[];
