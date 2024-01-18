import React from 'react'
import LineGraph from "../components/LineGraph";

const StrengthBld = () => {
  const seriesData = [
    {
      name: 'Pounds',
      data: [10, 23, 20, 55, 60, 65, 100, 115],
    },
    // Add more series data if needed
  ];

  const optionsData = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    
    
    grid: {
      row: {
        colors: ['#f3f3f3', '#ffffff'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Strength Growth
          </h1>
        </div>
      </header>
      <LineGraph series={seriesData} options={optionsData} />
    </div>
  );
}

export default StrengthBld