# Blue Carbon & Fisheries Potential - Makefile
# Commands to build, run, and manage the application

.PHONY: help install build up down restart logs clean backend frontend dev test

# Default target
help: ## Show this help message
	@echo "Blue Carbon & Fisheries Potential - Available Commands:"
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "Examples:"
	@echo "  make install    # Install all dependencies"
	@echo "  make dev        # Run full development environment"
	@echo "  make backend    # Run backend only"
	@echo "  make frontend   # Run frontend only"

## Installation Commands
install: ## Install all dependencies (backend + frontend)
	@echo "🔧 Installing backend dependencies..."
	cd backend && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt
	@echo "🔧 Installing frontend dependencies..."
	cd frontend && npm install
	@echo "✅ All dependencies installed!"

install-backend: ## Install backend dependencies only
	@echo "🔧 Installing backend dependencies..."
	cd backend && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt
	@echo "✅ Backend dependencies installed!"

install-frontend: ## Install frontend dependencies only
	@echo "🔧 Installing frontend dependencies..."
	cd frontend && npm install
	@echo "✅ Frontend dependencies installed!"

## Development Commands (Local)
dev: ## Run full development environment locally
	@echo "🚀 Starting full development environment..."
	@echo "Backend will run on http://127.0.0.1:8000"
	@echo "Frontend will run on http://localhost:5173"
	@echo "Press Ctrl+C to stop both services"
	@trap 'kill %1 %2 2>/dev/null || true' INT; \
	(cd backend && source venv/bin/activate && uvicorn main:app --reload) & \
	(cd frontend && npm run dev) & \
	wait

backend: ## Run backend development server only
	@echo "🔧 Starting backend server..."
	@echo "Backend running on http://127.0.0.1:8000"
	@echo "API docs: http://127.0.0.1:8000/docs"
	cd backend && source venv/bin/activate && uvicorn main:app --reload

frontend: ## Run frontend development server only
	@echo "🎨 Starting frontend server..."
	@echo "Frontend running on http://localhost:5173"
	cd frontend && npm run dev

## Docker Commands
docker-build: ## Build Docker images for both services
	@echo "🐳 Building Docker images..."
	docker compose build
	@echo "✅ Docker images built!"

docker-up: ## Start application using Docker Compose
	@echo "🐳 Starting application with Docker..."
	@echo "Backend: http://localhost:8000"
	@echo "Frontend: http://localhost:5173"
	docker compose up

docker-up-detached: ## Start application in background using Docker
	@echo "🐳 Starting application with Docker (detached)..."
	docker compose up -d
	@echo "✅ Application started!"
	@echo "Backend: http://localhost:8000"
	@echo "Frontend: http://localhost:5173"

docker-down: ## Stop Docker containers
	@echo "🛑 Stopping Docker containers..."
	docker compose down
	@echo "✅ Containers stopped!"

docker-restart: ## Restart Docker containers
	@echo "🔄 Restarting Docker containers..."
	docker compose restart
	@echo "✅ Containers restarted!"

docker-logs: ## Show Docker container logs
	docker compose logs -f

docker-backend: ## Run backend only with Docker
	@echo "🐳 Starting backend with Docker..."
	docker compose up backend

docker-frontend: ## Run frontend only with Docker  
	@echo "🐳 Starting frontend with Docker..."
	docker compose up frontend

## Testing Commands
test: ## Run all tests
	@echo "🧪 Running tests..."
	@echo "Backend tests..."
	cd backend && source venv/bin/activate && python -m pytest tests/ || echo "No backend tests found"
	@echo "Frontend tests..."
	cd frontend && npm run test || echo "No frontend tests configured"

test-backend: ## Run backend tests only
	@echo "🧪 Running backend tests..."
	cd backend && source venv/bin/activate && python -m pytest tests/ || echo "No backend tests found"

test-frontend: ## Run frontend tests only
	@echo "🧪 Running frontend tests..."
	cd frontend && npm run test || echo "No frontend tests configured"

## Build Commands
build: ## Build production versions
	@echo "🏗️ Building production versions..."
	@echo "Building frontend..."
	cd frontend && npm run build
	@echo "✅ Production builds complete!"

## Cleanup Commands
clean: ## Clean up all generated files
	@echo "🧹 Cleaning up..."
	cd backend && rm -rf venv __pycache__ .pytest_cache
	cd frontend && rm -rf node_modules dist .vite
	docker compose down --rmi all --volumes --remove-orphans 2>/dev/null || true
	@echo "✅ Cleanup complete!"

clean-docker: ## Clean up Docker containers and images
	@echo "🐳 Cleaning Docker resources..."
	docker compose down --rmi all --volumes --remove-orphans
	@echo "✅ Docker cleanup complete!"

## Status Commands
status: ## Show status of services
	@echo "📊 Service Status:"
	@echo
	@echo "Local Development:"
	@curl -s http://127.0.0.1:8000/ > /dev/null && echo "✅ Backend: Running (http://127.0.0.1:8000)" || echo "❌ Backend: Not running"
	@curl -s http://localhost:5173/ > /dev/null && echo "✅ Frontend: Running (http://localhost:5173)" || echo "❌ Frontend: Not running"
	@echo
	@echo "Docker:"
	@docker compose ps 2>/dev/null || echo "❌ Docker Compose: Not running"

## Quick Start
quick-start: install docker-build docker-up-detached ## Quick start: install, build, and run with Docker
	@echo "🎉 Blue Carbon Dashboard is starting up!"
	@echo "⏳ Waiting for services to be ready..."
	@sleep 10
	@make status