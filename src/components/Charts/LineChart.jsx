import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const InvestmentLineChart = () => {
  const data = [
    {
      bulan: "Jan",
      investasi: 10000000,
    },
  ];

  const [investment, setInvestment] = useState([]);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    setInvestment(data.map((item) => item.investasi)); // Ambil investasi dari data
    setMonth(data.map((item) => item.bulan)); // Ambil bulan dari data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Hanya jalankan sekali saat komponen di-mount

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
      {investment.length > 0 && month.length > 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={400}
        />
      ) : null}
    </div>
  );
};

export default InvestmentLineChart;
