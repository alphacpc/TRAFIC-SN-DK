"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from 'react';
import {COLUMN_STACKED}  from "../../libs/index";


const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnStrackedChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div id="chart">
      <ApexChart
        options={COLUMN_STACKED.options}
        series={COLUMN_STACKED.series}
        width={600}
        type="bar"
      />
    </div>
  );
}

export default ColumnStrackedChart;
