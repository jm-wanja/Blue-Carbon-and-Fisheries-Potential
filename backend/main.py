from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Blue Carbon MVP API")

# Simple input model
class CarbonInput(BaseModel):
    area_ha: float  # area in hectares
    sequestration_rate: float = 17.7  # tCO2e/ha/year (default from report)
    price_per_ton: float = 20  # USD per tCO2e

# Input model for fishery impact
class FisheryInput(BaseModel):
    area_ha: float                # mangrove area (ha)
    baseline_income_per_ha: float = 249  # USD/ha/year (Kwale average from report)
    change_in_area: Optional[float] = 0  # ha gained/lost due to restoration or degradation

class ScenarioInput(BaseModel):
    area_ha: float                        # starting mangrove area
    sequestration_rate: float = 17.7      # tCO2e/ha/year
    price_per_ton: float = 20             # USD/tCO2e
    baseline_income_per_ha: float = 249   # USD/ha/year
    restoration_area: float = 10          # extra ha restored in "restoration" scenario
    degradation_rate: float = 0.02        # 2% annual loss (for BAU)

@app.get("/")
def read_root():
    return {"msg": "Blue Carbon API running"}

@app.post("/carbon")
def calculate_carbon(data: CarbonInput):
    credits = data.area_ha * data.sequestration_rate
    revenue = credits * data.price_per_ton
    return {
        "area_ha": data.area_ha,
        "sequestration_rate": data.sequestration_rate,
        "credits_tCO2e": round(credits, 2),
        "revenue_usd": round(revenue, 2),
    }

@app.post("/fishery")
def calculate_fishery(data: FisheryInput):
    """
    Estimates fishery income linked to mangrove cover.
    - area_ha: current mangrove area
    - baseline_income_per_ha: avg. fishery income per ha/year (default = $249/ha/yr from report)
    - change_in_area: positive for restoration, negative for degradation
    """
    effective_area = data.area_ha + data.change_in_area
    baseline_income = data.area_ha * data.baseline_income_per_ha
    new_income = effective_area * data.baseline_income_per_ha
    delta_income = new_income - baseline_income

    return {
        "baseline_area_ha": data.area_ha,
        "effective_area_ha": effective_area,
        "baseline_income_usd": round(baseline_income, 2),
        "new_income_usd": round(new_income, 2),
        "delta_income_usd": round(delta_income, 2),
    }

@app.post("/scenario")
def compare_scenarios(data: ScenarioInput):
    """
    Compares BAU, Conservation, and Restoration scenarios
    for both carbon credits and fishery income.
    """

    results = {}

    # --- BAU (Business as Usual) ---
    bau_area = data.area_ha * (1 - data.degradation_rate)
    bau_credits = bau_area * data.sequestration_rate
    bau_revenue = bau_credits * data.price_per_ton
    bau_income = bau_area * data.baseline_income_per_ha
    results["BAU"] = {
        "area_ha": round(bau_area, 2),
        "credits_tCO2e": round(bau_credits, 2),
        "revenue_usd": round(bau_revenue, 2),
        "fishery_income_usd": round(bau_income, 2),
    }

    # --- Conservation (no further loss) ---
    cons_area = data.area_ha
    cons_credits = cons_area * data.sequestration_rate
    cons_revenue = cons_credits * data.price_per_ton
    cons_income = cons_area * data.baseline_income_per_ha
    results["Conservation"] = {
        "area_ha": cons_area,
        "credits_tCO2e": round(cons_credits, 2),
        "revenue_usd": round(cons_revenue, 2),
        "fishery_income_usd": round(cons_income, 2),
    }

    # --- Restoration (extra hectares added) ---
    rest_area = data.area_ha + data.restoration_area
    rest_credits = rest_area * data.sequestration_rate
    rest_revenue = rest_credits * data.price_per_ton
    rest_income = rest_area * data.baseline_income_per_ha
    results["Restoration"] = {
        "area_ha": rest_area,
        "credits_tCO2e": round(rest_credits, 2),
        "revenue_usd": round(rest_revenue, 2),
        "fishery_income_usd": round(rest_income, 2),
    }

    return results
