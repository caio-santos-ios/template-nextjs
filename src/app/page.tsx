"use client"

import { App } from "@/components/App/App";
import { Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from "chart.js";
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const dataSales = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  datasets: [
    { label: "Vendas", data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], borderColor: "rgb(75, 192, 192)", tension: 0.1 }
  ]
};

const dataPie = {
  labels: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Rio Grande do Sul'],
  datasets: [
    {
      label: '# Vendas por estado',
      data: [45, 15, 25, 15],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const dataPolarArea = {
  labels: ['Caio', 'Jorge', 'Mario', 'Ruan', 'Luiz', 'Lucas'],
  datasets: [
    {
      label: '# Vendas no mês',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Comparação ano anterior',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const dataLines = {
  labels,
  datasets: [
    {
      label: 'Anterior - 2024',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Atual - 2025',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

const dataDoughnut = {
  labels: ['São Paulo', 'Guarulhos', 'Rio de Janeiro', 'Duque de Caxias', 'Belo Horizonte', 'Porto Alegre'],
  datasets: [
    {
      label: '# Vendas por cidades',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Home() {
  return (
    <App>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-[20rem] bg-dash mb-4">
          <Line data={dataSales} />
        </div>
        <div className="h-[20rem] bg-dash mb-4">
          <Line options={options} data={dataLines} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="h-[20rem] bg-dash">
          <Pie data={dataPie} />
        </div>
        <div className="h-[20rem] bg-dash">
          <Doughnut data={dataDoughnut} />
        </div>
        <div className="h-[20rem] bg-dash">
          <PolarArea data={dataPolarArea} />
        </div>
      </div>
    </App>
  );
}
