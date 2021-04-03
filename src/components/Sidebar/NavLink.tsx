import { ElementType, ReactNode } from 'react';

import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

type NavLinkProps = ChakraLinkProps & {
  href: string;
  icon: ElementType;
  children: ReactNode;
};

export function NavLink({ href, icon, children, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
