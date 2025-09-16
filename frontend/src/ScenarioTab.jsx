import ResultsCard from './ResultsCard';

function ScenarioTab({ form, data, chart }) {
  const totals = data
    ? {
        BAU: data.BAU.revenue_usd + data.BAU.fishery_income_usd,
        Conservation: data.Conservation.revenue_usd + data.Conservation.fishery_income_usd,
        Restoration: data.Restoration.revenue_usd + data.Restoration.fishery_income_usd,
      }
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1">{form}</div>
      <div className="col-span-2 space-y-6">
        {/* ✅ Results Summary */}
        {totals && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResultsCard title="BAU Total Revenue" value={`$${totals.BAU.toLocaleString()}`} color="bg-gray-100 text-gray-800" />
            <ResultsCard title="Conservation Total Revenue" value={`$${totals.Conservation.toLocaleString()}`} color="bg-green-100 text-green-800" />
            <ResultsCard title="Restoration Total Revenue" value={`$${totals.Restoration.toLocaleString()}`} color="bg-blue-100 text-blue-800" />
          </div>
        )}

        {/* Chart */}
        {chart}
      </div>
    </div>
  );
}

export default ScenarioTab;
