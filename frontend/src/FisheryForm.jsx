import { useState } from "react";
import axios from "axios";

function FisheryForm({ onResult }) {
  const [area, setArea] = useState(100);
  const [baselineIncome, setBaselineIncome] = useState(249);
  const [change, setChange] = useState(10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/fishery", {
        area_ha: Number(area),
        baseline_income_per_ha: Number(baselineIncome),
        change_in_area: Number(change),
      });
      onResult(res.data);
    } catch (error) {
      console.error("Error fetching fishery results:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-bold">Fishery Impact Calculator</h2>

      <div>
        <label className="block font-medium">Area (hectares)</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Baseline Income (USD/ha/yr)</label>
        <input
          type="number"
          value={baselineIncome}
          onChange={(e) => setBaselineIncome(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Change in Area (ha)</label>
        <input
          type="number"
          value={change}
          onChange={(e) => setChange(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Calculate
      </button>
    </form>
  );
}

export default FisheryForm;
