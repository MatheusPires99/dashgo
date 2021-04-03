import { Box, Stack } from '@chakra-ui/react';

import { SIDE_BAR_NAVIGATION } from '../../constants';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {SIDE_BAR_NAVIGATION.map(item => (
          <NavSection key={item.title} title={item.title}>
            {item.links.map(link => (
              <NavLink key={link.text} link={link} />
            ))}
          </NavSection>
        ))}
      </Stack>
    </Box>
  );
}
