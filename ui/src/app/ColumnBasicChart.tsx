"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from 'react';
import {COLUMN_BASIC}  from "./../libs/index";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnBasicChart: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div id="chart">
      <ApexChart
        options={COLUMN_BASIC.options}
        series={COLUMN_BASIC.series}
        width={600}
        type="bar"
      />
    </div>
  );
}

export default ColumnBasicChart;
