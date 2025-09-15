import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';

function ScenarioComparisonChart({ data }) {
  if (!data || !data.BAU || !data.Conservation || !data.Restoration) {
    return <p className="text-gray-500">No scenario data yet. Submit the form to compare.</p>;
  }

  const chartData = [
    {
      name: 'BAU',
      Carbon: data.BAU.revenue_usd,
      Fishery: data.BAU.fishery_income_usd,
      Total: data.BAU.revenue_usd + data.BAU.fishery_income_usd,
    },
    {
      name: 'Conservation',
      Carbon: data.Conservation.revenue_usd,
      Fishery: data.Conservation.fishery_income_usd,
      Total: data.Conservation.revenue_usd + data.Conservation.fishery_income_usd,
    },
    {
      name: 'Restoration',
      Carbon: data.Restoration.revenue_usd,
      Fishery: data.Restoration.fishery_income_usd,
      Total: data.Restoration.revenue_usd + data.Restoration.fishery_income_usd,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />

        {/* ✅ Format Y-axis as USD */}
        <YAxis tickFormatter={(val) => `$${val.toLocaleString()}`} />

        {/* ✅ Tooltip shows $ with commas */}
        <Tooltip formatter={(val) => `$${val.toLocaleString()}`} />

        <Legend />

        {/* Bars: Carbon + Fishery */}
        <Bar dataKey="Carbon" stackId="a" fill="#3b82f6" />
        <Bar dataKey="Fishery" stackId="a" fill="#10b981" />

        {/* Line: Total Revenue */}
        <Line type="monotone" dataKey="Total" stroke="#f59e0b" strokeWidth={3} dot={{ r: 5 }} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ScenarioComparisonChart;
