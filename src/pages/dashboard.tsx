import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import { Chart } from '../components';
import { DASHBOARD_CHARTS } from '../constants';

export default function Dashboard() {
  return (
    <SimpleGrid flex="1" align="flex-start" gap="4" minChildWidth={320}>
      {DASHBOARD_CHARTS.map(chart => (
        <Box key={chart.title} p="8" bg="gray.800" borderRadius="8" pb="4">
          <Text fontSize="lg" mb="4">
            {chart.title}
          </Text>
          <Chart series={chart.series} />
        </Box>
      ))}
    </SimpleGrid>
  );
}
