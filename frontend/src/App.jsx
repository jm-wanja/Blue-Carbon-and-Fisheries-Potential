import { useState } from "react";
import CarbonForm from "./CarbonForm";
import CarbonChart from "./CarbonChart";
import FisheryForm from "./FisheryForm";
import FisheryChart from "./FisheryChart";
import ScenarioForm from "./ScenarioForm";
import ScenarioComparisonChart from "./ScenarioComparisonChart";

function App() {
  const [carbonResult, setCarbonResult] = useState(null);
  const [fisheryResult, setFisheryResult] = useState(null);
  const [scenarioResult, setScenarioResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">
        🌍 Blue Carbon & Fisheries Dashboard
      </h1>

      {/* Carbon Section */}
      <CarbonForm onResult={setCarbonResult} />
      {carbonResult && (
        <div className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Carbon Results</h3>
          <CarbonChart data={carbonResult} />
        </div>
      )}

      {/* Fishery Section */}
      <FisheryForm onResult={setFisheryResult} />
      {fisheryResult && (
        <div className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Fishery Results</h3>
          <FisheryChart data={fisheryResult} />
        </div>
      )}

      {/* Scenario Section */}
      <ScenarioForm onResult={setScenarioResult} />
      {scenarioResult && (
        <div className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Scenario Comparison</h3>
          <ScenarioComparisonChart data={scenarioResult} />
        </div>
      )}
    </div>
  );
}

export default App;
