import Chart from "react-apexcharts";

const PieChart = () => {
  const chartOptions = {
    chart: {
      type: "donut", // Set tipe chart ke donut
    },
    labels: ["Pertanian", "Perikanan", "Peternakan"],
    colors: ["#16a34a", "#2563eb", "#ca8a04"],
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: (value) => `Rp. ${value.toLocaleString()}`,
      },
    },
  };

  const chartSeries = [10000000, 5000000, 5000000];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="donut" 
      width="100%"
    />
  );
};

export default PieChart;
