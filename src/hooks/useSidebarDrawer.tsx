import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

type SidebarDrawerProviderData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerProviderData);

type SidebarDrawerProviderProps = {
  children: ReactNode;
};

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath, disclosure]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
