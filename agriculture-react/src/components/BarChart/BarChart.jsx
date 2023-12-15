import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

const generateRandomData = () => {
  return labels.map(() => faker.datatype.number({ min: 0, max: 20 }));
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      position: 'bottom',
      rotation: 90,
      text: 'Tinggi Tanaman Perbulan',
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Tinggi Tanaman (cm)',
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      data: generateRandomData(),
      backgroundColor: 'rgba(81, 171, 140, 1)',
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
