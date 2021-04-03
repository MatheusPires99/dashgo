import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

const RefInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label = '', ...rest },
  ref,
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(RefInput);
