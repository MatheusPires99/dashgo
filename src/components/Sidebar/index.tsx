import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useSidebarDrawer } from '../../hooks';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useSidebarDrawer();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />

            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
