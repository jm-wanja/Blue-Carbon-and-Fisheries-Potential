import { useState } from 'react';
import axios from 'axios';

function ScenarioForm({ onResult }) {
  // ✅ Realistic defaults from PDF (Kwale/Lamu averages)
  const [area, setArea] = useState(100); // hectares
  const [rate, setRate] = useState(17.7); // tCO₂e/ha/yr
  const [price, setPrice] = useState(20); // USD/ton
  const [baselineIncome, setBaselineIncome] = useState(249); // USD/ha/yr
  const [restoration, setRestoration] = useState(10); // hectares
  const [degradation, setDegradation] = useState(0.02); // 2% annual loss

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/scenario', {
        area_ha: Number(area),
        sequestration_rate: Number(rate),
        price_per_ton: Number(price),
        baseline_income_per_ha: Number(baselineIncome),
        restoration_area: Number(restoration),
        degradation_rate: Number(degradation),
      });
      onResult(res.data);
    } catch (error) {
      console.error('Error fetching scenario results:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold">Scenario Comparison</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Area (ha)</label>
          <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-medium">Sequestration Rate (tCO₂e/ha/yr)</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-medium">Carbon Price (USD/ton)</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-medium">Baseline Fishery Income (USD/ha/yr)</label>
          <input type="number" value={baselineIncome} onChange={(e) => setBaselineIncome(e.target.value)} className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-medium">Restoration Area (ha)</label>
          <input type="number" value={restoration} onChange={(e) => setRestoration(e.target.value)} className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-medium">Degradation Rate (BAU, % per year)</label>
          <input
            type="number"
            step="0.01"
            value={degradation}
            onChange={(e) => setDegradation(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Compare Scenarios
      </button>
    </form>
  );
}

export default ScenarioForm;
