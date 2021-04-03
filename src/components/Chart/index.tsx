import dynamic from 'next/dynamic';

import { CHART_OPTIONS } from '../../config';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ChartProps = {
  series: unknown[];
};

export function Chart({ series }: ChartProps) {
  return (
    <ApexChart
      options={CHART_OPTIONS}
      series={series}
      type="area"
      height={160}
    />
  );
}
