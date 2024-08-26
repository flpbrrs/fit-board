import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, plugins, } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

export default function WeightChart() {
    const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];

    const datasets = [90, 90, 91.4, 86, 85, 82, 84, 86];

    const data = {
      labels: labels,
      datasets: [
        {
            label: 'Peso',
            data: datasets,
            borderColor: "rgb(75, 192, 75)",
            tension: 0.5,
        },
        {
            label: 'Meta de peso',
            data: [85, 85, 85, 85, 85, 85, 85, 85],
            borderColor: "rgba(75, 75, 75, .3)",
        }
      ],
    };

    const options = {
      scales: {
        y: {
          title: {
            display: false,
          },
          display: true,
          min: 80,
          max: 100
        },
        x: {
          display: true,
        },
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    };

    return (
      <div>
        <Line data={data} options={options} />
      </div>
    )
}