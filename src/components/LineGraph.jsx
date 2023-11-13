import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineGraph = ({ series, options }) => {
  return (
    <div className="w-full h-full bg-[#5a53db]" id="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineGraph;
