import { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import CarbonForm from './CarbonForm';
import CarbonChart from './CarbonChart';
import FisheryForm from './FisheryForm';
import FisheryChart from './FisheryChart';
import ScenarioForm from './ScenarioForm';
import ScenarioComparisonChart from './ScenarioComparisonChart';
import ScenarioTab from './ScenarioTab';
import MangroveMap from './MangroveMap';

function App() {
  const [carbonData, setCarbonData] = useState(null);
  const [fisheryData, setFisheryData] = useState(null);
  const [scenarioData, setScenarioData] = useState(null);

  const tabs = {
    Carbon: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <CarbonForm onResult={setCarbonData} />
        </div>
        <div className="col-span-2">{carbonData && <CarbonChart data={carbonData} />}</div>
      </div>
    ),
    Fishery: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <FisheryForm onResult={setFisheryData} />
        </div>
        <div className="col-span-2">{fisheryData && <FisheryChart data={fisheryData} />}</div>
      </div>
    ),
    Scenario: (
      <ScenarioTab
        form={<ScenarioForm onResult={setScenarioData} />}
        data={scenarioData}
        chart={scenarioData && <ScenarioComparisonChart data={scenarioData} />}
      />
    ),
    Map: <MangroveMap />,
  };

  return <DashboardLayout tabs={tabs} />;
}

export default App;
