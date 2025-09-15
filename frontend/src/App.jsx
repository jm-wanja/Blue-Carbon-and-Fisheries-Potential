import { useState } from "react";
import axios from "axios";

function App() {
  const [activeTab, setActiveTab] = useState("carbon");
  const [result, setResult] = useState(null);

  const runCarbon = async () => {
    const res = await axios.post("http://127.0.0.1:8000/carbon", {
      area_ha: 100,
      sequestration_rate: 17.7,
      price_per_ton: 20,
    });
    setResult(res.data);
    setActiveTab("carbon");
  };

  const runFishery = async () => {
    const res = await axios.post("http://127.0.0.1:8000/fishery", {
      area_ha: 100,
      baseline_income_per_ha: 249,
      change_in_area: 10,
    });
    setResult(res.data);
    setActiveTab("fishery");
  };

  const runScenario = async () => {
    const res = await axios.post("http://127.0.0.1:8000/scenario", {
      area_ha: 100,
      sequestration_rate: 17.7,
      price_per_ton: 20,
      baseline_income_per_ha: 249,
      restoration_area: 10,
      degradation_rate: 0.02,
    });
    setResult(res.data);
    setActiveTab("scenario");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">
        🌍 Blue Carbon & Fisheries Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={runCarbon}
          className={`px-4 py-2 rounded ${
            activeTab === "carbon" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Carbon Credits
        </button>
        <button
          onClick={runFishery}
          className={`px-4 py-2 rounded ${
            activeTab === "fishery" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Fishery Impact
        </button>
        <button
          onClick={runScenario}
          className={`px-4 py-2 rounded ${
            activeTab === "scenario" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Scenario Comparison
        </button>
      </div>

      {/* Results */}
      <div className="bg-white p-6 rounded shadow">
        {result ? (
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-600">
            Select a tab to fetch results from the backend.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
