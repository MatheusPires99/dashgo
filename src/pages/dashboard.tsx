import dynamic from 'next/dynamic';

import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { Header, SideBar } from '../components';
import { CHART_OPTIONS } from '../config';
import { DASHBOARD_CHARTS } from '../constants';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex as="main" w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" align="flex-start" gap="4" minChildWidth={320}>
          {DASHBOARD_CHARTS.map(chart => (
            <Box key={chart.title} p="8" bg="gray.800" borderRadius="8" pb="4">
              <Text fontSize="lg" mb="4">
                {chart.title}
              </Text>
              <Chart
                options={CHART_OPTIONS}
                series={chart.series}
                type="area"
                height={160}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
