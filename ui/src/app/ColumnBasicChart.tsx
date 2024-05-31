"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from 'react';

const COLUMN_BASIC = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  } as ApexOptions,
}



const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnBasicChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set state on component mount
  }, []);

  if (!isMounted) return null;

  return (
    <div id="chart">
      <ApexChart
        options={COLUMN_BASIC.options}
        series={COLUMN_BASIC.series}
        width={600}
      />
    </div>
  );
}

export default ColumnBasicChart;