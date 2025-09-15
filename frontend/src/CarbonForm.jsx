import { useState } from "react";
import axios from "axios";

function CarbonForm({ onResult }) {
  const [area, setArea] = useState(100);
  const [rate, setRate] = useState(17.7);
  const [price, setPrice] = useState(20);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/carbon", {
        area_ha: Number(area),
        sequestration_rate: Number(rate),
        price_per_ton: Number(price),
      });
      onResult(res.data);
    } catch (error) {
      console.error("Error fetching carbon results:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Carbon Credit Calculator</h2>

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
        <label className="block font-medium">Sequestration Rate (tCO₂e/ha/yr)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Carbon Price (USD/ton)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate
      </button>
    </form>
  );
}

export default CarbonForm;
