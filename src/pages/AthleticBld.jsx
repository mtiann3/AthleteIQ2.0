import React from "react";
import LineGraph from "../components/LineGraph";
// algorithm to update progress across an exercise*********************************
// 1. Filter all entered exercises by exercises entered in a 
// specific month (start with january of the first year)
// 2. Filter all of the filtered exercises by a specific exercise name.
// 3. Go through each exercise, and convert them to an estimated 1 rep max, then add 
// them to a temp array.
// 4. Take the average of the temp array.
// 5. Add that value to a new temp array.
// 6. Add the month and year of that value to a separate array, but same index.
// 6. Repeat for every month until every month with an entry is covered.
// 7. Update data and options with the 2 temp arrays.

const AthleticBld = () => {
  const seriesData = [
    {
      name: 'Pounds',
      data: [90,145,165,180,185,200,205,215,225,230,235,245,260,275],
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
      categories: ['9/2021', '10/2022', '11/2022', '12/2022', '1/2023', '2/2023', '3/2023', '4/2023', '5/2023','6/23','11/2022','11/2022'],
    },
  };

  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Athletic Growth
          </h1>
        </div>
      </header>
      <LineGraph series={seriesData} options={optionsData} />
    </div>
  );
};

export default AthleticBld;
