import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SeverityChart({ alerts }) {
  const counts = { INFO: 0, WARNING: 0, CRITICAL: 0 };
  alerts.forEach(a => {
    counts[a.severity] = (counts[a.severity] || 0) + 1;
  });

  const data = {
    labels: ['INFO', 'WARNING', 'CRITICAL'],
    datasets: [{
      label: 'Alert Counts',
      data: [counts.INFO, counts.WARNING, counts.CRITICAL],
      backgroundColor: ['green', 'orange', 'red']
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Alerts by Severity' }
    }
  };

  return <Bar data={data} options={options} />;
}

export default SeverityChart;
