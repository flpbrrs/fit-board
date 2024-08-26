import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

export default function BodyCompositionChart() {
  const data = {
    labels: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'
    ],
    datasets: [
      {
        label: 'Gordura',
        data: [25, 30, 35, 28, 32, 29, 33, 31],
        backgroundColor: 'rgba(255, 205, 86, 0.7)',
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
        barPercentage: 1,
      },
      {
        label: 'Massa magra',
        data: [65, 55, 60, 70, 68, 75, 67, 69],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

    return (
      <Bar data={data} options={options} />
    )
}