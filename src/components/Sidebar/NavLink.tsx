import { ElementType, ReactNode } from 'react';
import Link from 'next/link';

import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

type NavLinkProps = ChakraLinkProps & {
  href: string;
  icon: ElementType;
  children: ReactNode;
};

export function NavLink({ href, icon, children, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
