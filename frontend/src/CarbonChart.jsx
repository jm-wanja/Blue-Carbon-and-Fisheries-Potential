import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function CarbonChart({ data }) {
  // transform API result into chart-friendly format
  const chartData = [
    { name: "Credits (tCO₂e)", value: data.credits_tCO2e },
    { name: "Revenue (USD)", value: data.revenue_usd }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CarbonChart;
