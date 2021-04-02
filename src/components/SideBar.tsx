import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';

import { SIDE_BAR_NAVIGATION } from '../constants';

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {SIDE_BAR_NAVIGATION.map(item => (
          <Box key={item.title}>
            <Text fontWeight="bold" color="gray.400" fontSize="small">
              {item.title}
            </Text>

            <Stack spacing="4" mt="8" align="stretch">
              {item.links.map(link => (
                <Link key={link.text} display="flex" align="center">
                  <Icon as={link.icon} fontSize="20" />
                  <Text ml="4" fontWeight="medium">
                    {link.text}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
