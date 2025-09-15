# Blue Carbon and Fisheries Potential API

A FastAPI-based MVP for calculating the economic potential of blue carbon credits and fishery income from mangrove ecosystems.

## Overview

This API provides endpoints to calculate and compare economic benefits from mangrove conservation, restoration, and carbon sequestration projects. It combines carbon credit revenue with fishery income to provide comprehensive economic analysis.

## Features

- **Carbon Credit Calculations**: Calculate carbon sequestration and revenue potential
- **Fishery Impact Analysis**: Estimate fishery income linked to mangrove area
- **Scenario Comparison**: Compare Business as Usual (BAU), Conservation, and Restoration scenarios
- **Interactive Documentation**: Auto-generated API docs with FastAPI

## API Endpoints

### 1. Health Check
- **GET** `/` - API status check

### 2. Carbon Credit Calculation
- **POST** `/carbon` - Calculate carbon credits and revenue
- Parameters:
  - `area_ha`: Mangrove area in hectares
  - `sequestration_rate`: tCO2e/ha/year (default: 17.7)
  - `price_per_ton`: USD per tCO2e (default: 20)

### 3. Fishery Impact Analysis
- **POST** `/fishery` - Calculate fishery income impact
- Parameters:
  - `area_ha`: Current mangrove area in hectares
  - `baseline_income_per_ha`: USD/ha/year (default: 249)
  - `change_in_area`: Area change due to restoration/degradation

### 4. Scenario Comparison
- **POST** `/scenario` - Compare BAU, Conservation, and Restoration scenarios
- Parameters:
  - `area_ha`: Starting mangrove area
  - `sequestration_rate`: tCO2e/ha/year (default: 17.7)
  - `price_per_ton`: USD per tCO2e (default: 20)
  - `baseline_income_per_ha`: USD/ha/year (default: 249)
  - `restoration_area`: Extra hectares for restoration (default: 10)
  - `degradation_rate`: Annual loss rate for BAU (default: 0.02)

## Installation

1. **Clone the repository** (after initial setup):
   ```bash
   git clone <repository-url>
   cd Blue-Carbon-and-Fisheries-Potential/backend
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. **Start the API server**:
   ```bash
   uvicorn main:app --reload
   ```

2. **Access the API**:
   - API Base URL: http://127.0.0.1:8000
   - Interactive Documentation: http://127.0.0.1:8000/docs
   - OpenAPI Schema: http://127.0.0.1:8000/openapi.json

## Example Requests

### Carbon Credit Calculation
```bash
curl -X POST "http://127.0.0.1:8000/carbon" \
     -H "Content-Type: application/json" \
     -d '{"area_ha": 100, "sequestration_rate": 17.7, "price_per_ton": 20}'
```

### Scenario Comparison
```bash
curl -X POST "http://127.0.0.1:8000/scenario" \
     -H "Content-Type: application/json" \
     -d '{"area_ha": 100, "restoration_area": 20, "degradation_rate": 0.02}'
```

## Data Sources

- **Carbon Sequestration Rate**: 17.7 tCO2e/ha/year (from research report)
- **Fishery Income**: $249/ha/year (Kwale average from research)
- **Carbon Price**: $20/tCO2e (default market price)

## Project Structure

```
backend/
├── main.py           # FastAPI application
├── requirements.txt  # Python dependencies
├── README.md        # This file
└── .gitignore       # Git ignore rules
```

## Development

The API uses:
- **FastAPI** for the web framework
- **Pydantic** for data validation
- **Uvicorn** for the ASGI server



## Contact
For questions or contributions, please open an Issue on this repository.”
