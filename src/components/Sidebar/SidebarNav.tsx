import { Stack } from '@chakra-ui/react';

import { SIDE_BAR_NAVIGATION } from '../../constants';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      {SIDE_BAR_NAVIGATION.map(item => (
        <NavSection key={item.title} title={item.title}>
          {item.links.map(link => (
            <NavLink key={link.text} href={link.path} icon={link.icon}>
              {link.text}
            </NavLink>
          ))}
        </NavSection>
      ))}
    </Stack>
  );
}
