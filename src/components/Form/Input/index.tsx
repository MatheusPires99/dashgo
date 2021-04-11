import { forwardRef, ForwardRefRenderFunction } from 'react';

import { FieldError } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

import { ErrorMessage } from '..';

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldError;
};

const RefInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label = null, error = null, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
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

      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(RefInput);
