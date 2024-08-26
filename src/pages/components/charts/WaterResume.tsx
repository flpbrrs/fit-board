import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

const WaterChart = () => {
  const labels = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const datasets = [2, 4, 3, 1, 4, 2, 3];
  const data = {
    labels: labels,
    datasets: [
      {
        data: datasets,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
      },
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: false,
        },
        display: true,
        beginAtZero: true,
        max: 5,
      },
      x: {
        display: true,
      },
    },
    plugins: {
        legend: {
            display: false
        }
    }
  };
  return (
    <Bar data={data} options={options} />
  );
};

export default WaterChart;