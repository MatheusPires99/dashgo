import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData: boolean;
};

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Pires</Text>
          <Text color="gray.300" fontSize="small">
            matheushenriquepires99@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Pires"
        src="https://github.com/MatheusPires99.png"
      />
    </Flex>
  );
}
