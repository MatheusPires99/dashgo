import {
  Flex,
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from '@chakra-ui/react';

export function Spinner({ ...props }: ChakraSpinnerProps) {
  return (
    <Flex justify="center">
      <ChakraSpinner {...props} />
    </Flex>
  );
}
