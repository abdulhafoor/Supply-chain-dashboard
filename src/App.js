import React, { useEffect, useState } from 'react';
import SeverityChart from './SeverityChart'; // <-- new chart component

function App() {
  const [alerts, setAlerts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await fetch('http://localhost:3001/alerts/recent.json?limit=20');
        const data = await res.json();
        setAlerts(data.alerts || []);
      } catch (err) {
        console.error('Failed to fetch alerts:', err);
      }
    };
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const severityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'red';
      case 'WARNING': return 'orange';
      default: return 'green';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Supply Chain Defense Dashboard</h1>

      {/* Filter dropdown */}
      <div style={{ marginBottom: '15px' }}>
        <label>Filter by severity: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="INFO">INFO</option>
          <option value="WARNING">WARNING</option>
          <option value="CRITICAL">CRITICAL</option>
        </select>
      </div>

      {/* Chart visualization */}
      <div style={{ marginBottom: '30px', width: '600px' }}>
        <SeverityChart alerts={alerts} />
      </div>

      {/* Alerts table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Event</th>
            <th>Package</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {alerts
            .filter(a => !filter || a.severity === filter)
            .map((a, i) => (
              <tr key={i}>
                <td>{a.timestamp}</td>
                <td>{a.event}</td>
                <td>{a.package}</td>
                <td style={{ color: severityColor(a.severity) }}>{a.severity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
