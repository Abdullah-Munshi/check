import React from "react";
// import Chart from "react-apexcharts";

const StatisticsChart = () => {
  const series = [
    {
      name: "series-1",
      data: [0, 50, 100, 150, 200],
    },
  ];

  const options = {
    chart: {
      id: "Line-1",
    },
    xaxis: {
      categories: [0, 12, 13, 14, 15, 16, 17],
    },
  };

  return (
    <div className="chart">
      {/* <Chart options={options} series={series} type="line" /> */}
    </div>
  );
};

export default StatisticsChart;
