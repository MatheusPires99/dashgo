import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import { SidebarLink } from '../../constants/sidebar-navigation';

type NavLinkProps = ChakraLinkProps & {
  link: SidebarLink;
};

export function NavLink({ link, ...rest }: NavLinkProps) {
  return (
    <Link key={link.text} display="flex" align="center" {...rest}>
      <Icon as={link.icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {link.text}
      </Text>
    </Link>
  );
}
