"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from 'react';
import {LINE_DASHED}  from "../../libs/index";


const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineDashedChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div id="chart">
      <ApexChart
        options={LINE_DASHED.options}
        series={LINE_DASHED.series}
        width={800}
      />
    </div>
  );
}

export default LineDashedChart;
