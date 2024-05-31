"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from 'react';

const LINE_WITH_LABELS = {
  series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Average High & Low Temperature',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature'
      },
      min: 5,
      max: 40
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  } as ApexOptions,
};

interface TopicGraphProps {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}


const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set state on component mount
  }, []);

  if (!isMounted) return null;

  return (
    <div id="chart">
      <ApexChart
        options={LINE_WITH_LABELS.options}
        series={LINE_WITH_LABELS.series}
        type="line"
        // height={350}
        width={600}
      />
    </div>
  );
}

export default LineChart;
