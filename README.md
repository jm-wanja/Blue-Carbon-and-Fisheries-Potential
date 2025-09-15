# 🌍 Blue Carbon & Fisheries Potential

A comprehensive web application for calculating the economic potential of blue carbon credits and fishery income from mangrove ecosystems. This project provides economic analysis tools to compare Business as Usual (BAU), Conservation, and Restoration scenarios for mangrove management.

## 📋 Project Overview

This MVP demonstrates the economic benefits of mangrove conservation by:

* **Calculating carbon sequestration potential** and associated revenue
* **Analyzing fishery income impacts** from mangrove area changes
* **Comparing management scenarios** to support decision-making
* **Providing interactive tools** for coastal communities, NGOs, and policymakers

## 🏗️ Architecture

```
Blue-Carbon-and-Fisheries-Potential/
├── backend/          # FastAPI REST API
├── frontend/         # React + Vite web application
├── notes/            # Research and development notes
```

### Backend (FastAPI)

* **Framework**: FastAPI with automatic OpenAPI documentation
* **Endpoints**: `/carbon`, `/fishery`, `/scenario` for economic calculations
* **Data Models**: Pydantic models for input validation
* **CORS**: Configured for frontend integration

### Frontend (React + Vite)

* **Framework**: React 19 with Vite for fast development
* **Styling**: Tailwind CSS for responsive design
* **HTTP Client**: Axios for API communication
* **UI**: Interactive forms with real-time data visualization
* **Charts**: Recharts for professional data visualization

## 🚀 Quick Start

### Prerequisites

* Python 3.8+
* Node.js 18+
* npm or yarn

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API available at:

* **Base URL**: [http://127.0.0.1:8000](http://127.0.0.1:8000)
* **Docs**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Web app available at:

* **Local**: [http://localhost:5173](http://localhost:5173)

## 📈 Data Sources & Research Basis

| Parameter                 | Default Value      | Source                   |
| ------------------------- | ------------------ | ------------------------ |
| Carbon Sequestration Rate | 17.7 tCO₂e/ha/year | Research report analysis |
| Fishery Income (Kwale)    | \$249/ha/year      | Coastal community study  |
| Carbon Price              | \$20/tCO₂e         | Market average           |
| Degradation Rate (BAU)    | 2% annual loss     | Conservation scenarios   |

## 🔧 API Endpoints

### `POST /carbon`

Calculate carbon credits and revenue.

### `POST /fishery`

Estimate fishery income from mangrove area changes.

### `POST /scenario`

Compare BAU, Conservation, and Restoration scenarios.

(See full request/response examples in [backend/README.md](backend/README.md))

## 🎨 Frontend Features

* **Interactive Forms**: Navigate between carbon, fishery, and scenario tools
* **Responsive Design**: Works across devices
* **Real-time Updates**: Instant API results
* **Modern UI**: Tailwind styling
* **Data Visualization**: Interactive Recharts graphs

## 📦 Build & Deployment

### Frontend

```bash
cd frontend
npm run build
```

### Backend

For production:

* Use Gunicorn/Uvicorn workers
* Add env variable configuration
* Enable logging & monitoring
* Integrate database (Postgres + PostGIS)

## 🛣️ Roadmap

### Phase 1: Core MVP ✅

* [x] FastAPI backend
* [x] React frontend with forms
* [x] Scenario comparison
* [x] Interactive charts

### Phase 2: Enhanced Features

* [ ] Interactive maps (Leaflet/Mapbox)
* [ ] Database integration (PostgreSQL + PostGIS)
* [ ] User authentication
* [ ] Advanced charts

### Phase 3: Advanced Integration

* [ ] Satellite monitoring (Sentinel-2/PlanetScope)
* [ ] Real-time data feeds
* [ ] Mobile field app
* [ ] Multi-language support

---

**Built with 💚 for mangrove conservation and coastal community empowerment**
