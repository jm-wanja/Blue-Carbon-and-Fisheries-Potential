# 🌍 Blue Carbon & Fisheries Potential

A comprehensive web application for calculating the economic potential of blue carbon credits and fishery income from mangrove ecosystems. This project provides economic analysis tools to compare Business as Usual (BAU), Conservation, and Restoration scenarios for mangrove management.

## 📋 Project Overview

This MVP demonstrates the economic benefits of mangrove conservation by:
- **Calculating carbon sequestration potential** and associated revenue
- **Analyzing fishery income impacts** from mangrove area changes  
- **Comparing management scenarios** to support decision-making
- **Providing interactive tools** for coastal communities, NGOs, and policymakers

## 🏗️ Architecture

```
Blue-Carbon-and-Fisheries-Potential/
├── backend/          # FastAPI REST API
├── frontend/         # React + Vite web application
├── notes/           # Research and development notes
└── WARP.md         # Development guidelines for AI assistants
```

### Backend (FastAPI)
- **Framework**: FastAPI with automatic OpenAPI documentation
- **Endpoints**: `/carbon`, `/fishery`, `/scenario` for economic calculations
- **Data Models**: Pydantic models for input validation
- **CORS**: Configured for frontend integration

### Frontend (React + Vite)
- **Framework**: React 19 with Vite for fast development
- **Styling**: Tailwind CSS for responsive design
- **HTTP Client**: Axios for API communication
- **UI**: Tabbed interface with real-time data visualization

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the API server**:
   ```bash
   uvicorn main:app --reload
   ```

   The API will be available at:
   - **Base URL**: http://127.0.0.1:8000
   - **Interactive Docs**: http://127.0.0.1:8000/docs
   - **OpenAPI Schema**: http://127.0.0.1:8000/openapi.json

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The web application will be available at:
   - **Local**: http://localhost:5173
   - **Network**: Use `--host` flag to expose

## 📊 Data Sources & Research Basis

The calculations are based on peer-reviewed research and field studies:

| Parameter | Default Value | Source |
|-----------|---------------|--------|
| Carbon Sequestration Rate | 17.7 tCO2e/ha/year | Research report analysis |
| Fishery Income (Kwale) | $249/ha/year | Coastal community study |
| Carbon Price | $20/tCO2e | Current market rates |
| Degradation Rate (BAU) | 2% annual loss | Conservation scenarios |

## 🔧 API Endpoints

### `POST /carbon`
Calculate carbon credits and revenue for a given area.

**Request**:
```json
{
  "area_ha": 100,
  "sequestration_rate": 17.7,
  "price_per_ton": 20
}
```

**Response**:
```json
{
  "area_ha": 100,
  "sequestration_rate": 17.7,
  "credits_tCO2e": 1770.0,
  "revenue_usd": 35400.0
}
```

### `POST /fishery`
Analyze fishery income impact from mangrove area changes.

**Request**:
```json
{
  "area_ha": 100,
  "baseline_income_per_ha": 249,
  "change_in_area": 10
}
```

### `POST /scenario`
Compare BAU, Conservation, and Restoration scenarios.

**Request**:
```json
{
  "area_ha": 100,
  "restoration_area": 20,
  "degradation_rate": 0.02
}
```

## 🎨 Frontend Features

- **🎯 Tabbed Interface**: Easy navigation between different analysis types
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **⚡ Real-time Updates**: Instant results from API calls
- **🎨 Modern UI**: Clean design with Tailwind CSS
- **📊 Data Visualization**: Clear presentation of economic scenarios

## 🧪 Testing the Application

### Manual API Testing
```bash
# Test carbon endpoint
curl -X POST "http://127.0.0.1:8000/carbon" \
     -H "Content-Type: application/json" \
     -d '{"area_ha": 100, "sequestration_rate": 17.7, "price_per_ton": 20}'

# Test scenario comparison
curl -X POST "http://127.0.0.1:8000/scenario" \
     -H "Content-Type: application/json" \
     -d '{"area_ha": 100, "restoration_area": 20, "degradation_rate": 0.02}'
```

### Frontend Testing
1. Start both backend and frontend servers
2. Open http://localhost:5173
3. Click through the tabs to test each endpoint
4. Verify data displays correctly in the results panel

## 📦 Build & Deployment

### Frontend Production Build
```bash
cd frontend
npm run build
```

### Backend Production
For production deployment, consider:
- Using a production ASGI server like Gunicorn with Uvicorn workers
- Adding environment variable configuration
- Implementing proper logging and monitoring
- Adding database integration for persistent data

## 🛣️ Roadmap

### Phase 1: Core MVP ✅
- [x] FastAPI backend with economic calculations
- [x] React frontend with tabbed interface
- [x] Basic scenario comparison functionality

### Phase 2: Enhanced Features
- [ ] Interactive maps with Leaflet.js/Mapbox
- [ ] Database integration (PostgreSQL + PostGIS)
- [ ] User authentication and data persistence
- [ ] Advanced data visualization with charts

### Phase 3: Advanced Integration
- [ ] Satellite monitoring integration (Sentinel-2/PlanetScope)
- [ ] Real-time data feeds and monitoring
- [ ] Mobile app for field data collection
- [ ] Multi-language support



---

**Built with 💚 for mangrove conservation and coastal community empowerment**
