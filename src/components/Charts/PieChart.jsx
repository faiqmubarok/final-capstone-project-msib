import Chart from "react-apexcharts";
import propTypes from "prop-types";

const PieChart = ({ dataDistribution }) => {
  const labels = dataDistribution?.map((item) => item.label);
  const chartSeries = dataDistribution?.map((item) => item.total_investment);

  if (!chartSeries || chartSeries.every((item) => item === 0)) {
    return <div className="text-center text-gray-500">Belum ada investasi</div>;
  }

  const chartOptions = {
    chart: {
      type: "donut", // Set tipe chart ke donut
    },
    labels: labels, // Gunakan labels yang sudah diproses dari dataDistribution
    colors: ["#16a34a", "#2563eb", "#ca8a04"], // Tambahkan atau sesuaikan warna jika kategori bertambah
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: (value) => `Rp. ${value.toLocaleString()}`, // Format angka menjadi format rupiah
      },
    },
  };

  return (
    <div className="mx-auto my-0 max-w-96">
      <Chart
        options={chartOptions}
        series={chartSeries} // Gunakan series yang sudah diproses dari dataDistribution
        type="donut"
        width="100%"
      />
    </div>
  );
};

PieChart.propTypes = {
  dataDistribution: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      total_investment: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieChart;
