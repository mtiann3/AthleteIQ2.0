import React from "react";
import LineGraph from "../components/LineGraph";

const AthleticBld = () => {
  const seriesData = [
    {
      name: 'Pounds',
      data: [10, 15, 20, 50, 1000, 70, 65, 100, 148],
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
    title: {
      text: "1 Rep Max Data (Data is calculated based on lift entries entered throughout that specific month, and adjusted to an estimated 1 rep max)",
      align: 'left',
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
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Athletic Building
          </h1>
        </div>
      </header>
      <LineGraph series={seriesData} options={optionsData} />
    </div>
  );
};

export default AthleticBld;
