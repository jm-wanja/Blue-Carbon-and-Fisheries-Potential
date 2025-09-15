import { useState } from 'react'
import axios from 'axios'

function App() {
  const [result, setResult] = useState(null)

  const runScenario = async () => {
    const res = await axios.post('http://127.0.0.1:8000/scenario', {
      area_ha: 100,
      sequestration_rate: 17.7,
      price_per_ton: 20,
      baseline_income_per_ha: 249,
      restoration_area: 10,
      degradation_rate: 0.02
    })
    setResult(res.data)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blue Carbon & Fisheries Dashboard</h1>
      <button onClick={runScenario}>Run Scenario</button>

      {result && (
        <pre style={{ background: "#eee", padding: "1rem" }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default App
