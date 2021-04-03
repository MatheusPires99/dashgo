import { ElementType, ReactNode } from 'react';

import { FormErrorMessage, FormErrorIcon, Icon } from '@chakra-ui/react';
import { RiAlertLine } from 'react-icons/ri';

type ErrorMessageProps = {
  children: ReactNode;
  icon?: ElementType;
};

export function ErrorMessage({ icon, children }: ErrorMessageProps) {
  return (
    <FormErrorMessage>
      <FormErrorIcon icon={<Icon as={icon || RiAlertLine} />} />

      {children}
    </FormErrorMessage>
  );
}
