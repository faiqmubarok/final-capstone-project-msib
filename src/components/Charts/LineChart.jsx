import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import propTypes from "prop-types";

const InvestmentLineChart = ({ data, loading }) => {
  const [investment, setInvestment] = useState([]);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    if (!loading && data.length > 0) {
      setInvestment(data.map((item) => item.investasi || 0)); // Gunakan 0 jika `investasi` tidak ada
      setMonth(data.map((item) => item.bulan || "")); // Gunakan string kosong jika `bulan` tidak ada
    } else {
      setInvestment([]);
      setMonth([]);
    }
  }, [data, loading]);

  const chartData = {
    series: [
      {
        name: "Investasi",
        data: investment,
      },
    ],
    options: {
      chart: {
        type: "line",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: month,
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            if (value >= 1_000_000_000)
              return `Rp ${(value / 1_000_000_000).toFixed(1)} T`; // Triliun
            if (value >= 1_000_000)
              return `Rp ${(value / 1_000_000).toFixed(1)} Jt`; // Jutaan
            if (value >= 1_000) return `Rp ${(value / 1_000).toFixed(1)} Rb`; // Ribuan
            return `Rp ${value.toLocaleString("id-ID")}`; // Ratusan atau lebih rendah
          },
        },
      },
      tooltip: {
        y: {
          formatter: (value) => `Rp ${value.toLocaleString("id-ID")}`,
        },
      },
      title: {
        text: "Investasi Bulanan dalam 1 Tahun",
        align: window.innerWidth < 768 ? "left" : "center",
      },
    },
  };

  return (
    <div>
      {loading || !investment.length || !month.length ? (
        <p>Memuat...</p> // Tampilkan loading jika masih menunggu atau data kosong
      ) : (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={400}
        />
      )}
    </div>
  );
};

InvestmentLineChart.propTypes = {
  data: propTypes.array,
  loading: propTypes.bool,
};

export default InvestmentLineChart;
