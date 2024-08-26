import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const MacronutrientChart = () => {
  const data = {
    labels: ['Proteínas', 'Carboidratos', 'Gorduras'],
    datasets: [
      {
        data: [15, 29, 56],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)', // Proteínas
          'rgba(255, 159, 64, 0.7)', // Carboidratos
          'rgba(255, 99, 132, 0.7)', // Gorduras
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  return (
    <div className='h-36 w-full flex justify-center items-center'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MacronutrientChart;