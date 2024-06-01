"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from 'react';
import {LINE_WITH_LABELS}  from "../../libs/index";


const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
