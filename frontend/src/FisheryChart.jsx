import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function FisheryChart({ data }) {
  // API result: baseline_income_usd, new_income_usd, delta_income_usd
  const chartData = [
    { name: "Baseline Income", value: data.baseline_income_usd },
    { name: "New Income", value: data.new_income_usd },
    { name: "Difference", value: data.delta_income_usd },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default FisheryChart;
