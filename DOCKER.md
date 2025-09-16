# 🐳 Docker Setup for Blue Carbon & Fisheries Potential

This document explains how to run the Blue Carbon Dashboard using Docker and the provided Makefile commands.

## 📋 Prerequisites

- Docker Desktop installed and running
- Docker Compose v3.8+
- Make (usually pre-installed on macOS/Linux)

## 🚀 Quick Start

### Option 1: One Command Setup
```bash
make quick-start
```
This will:
- Install all dependencies
- Build Docker images
- Start both services in background
- Show service status

### Option 2: Step by Step
```bash
# Install dependencies
make install

# Build Docker images
make docker-build

# Start all services
make docker-up-detached
```

## 📊 Available Commands

### Local Development (No Docker)
```bash
make install          # Install all dependencies
make dev              # Run both backend and frontend locally
make backend          # Run backend only (http://127.0.0.1:8000)
make frontend         # Run frontend only (http://localhost:5173)
```

### Docker Commands
```bash
make docker-build     # Build Docker images
make docker-up        # Start all services (foreground)
make docker-up-detached  # Start all services (background)
make docker-down      # Stop all services
make docker-restart   # Restart all services
make docker-logs      # View container logs
```

### Individual Docker Services
```bash
make docker-backend   # Run backend only with Docker
make docker-frontend  # Run frontend only with Docker
```

### Utility Commands
```bash
make status           # Check service status
make build            # Build production versions
make clean            # Clean up all generated files
make clean-docker     # Clean up Docker resources
make help             # Show all available commands
```

## 🌐 Service URLs

When running, your services will be available at:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🏗️ Docker Architecture

### Services
- **backend**: FastAPI application (Python 3.11)
- **frontend**: React application (Node.js 20)

### Network
- Both services run on a shared Docker network: `blue-carbon-network`
- Frontend can communicate with backend via internal network

### Volumes
- Source code is mounted for development
- `node_modules` and `venv` are excluded from volume mounts for performance

### Health Checks
- Backend health check: `GET http://localhost:8000/`
- Frontend health check: `GET http://localhost:5173/`
- Services wait for dependencies to be healthy before starting

## 🔧 Development Workflow

### 1. Initial Setup
```bash
make quick-start
```

### 2. Daily Development
```bash
# Check what's running
make status

# Start everything (if needed)
make docker-up-detached

# View logs
make docker-logs

# Stop everything (when done)
make docker-down
```

### 3. Making Changes
Since volumes are mounted, changes to your code will be reflected immediately:
- **Backend**: FastAPI auto-reloads on file changes
- **Frontend**: Vite HMR provides instant updates

### 4. Rebuilding (when dependencies change)
```bash
# If you add new Python packages
make docker-build

# If you add new npm packages  
make docker-build
```

## 🐛 Troubleshooting

### Services Won't Start
```bash
# Check container status
docker compose ps

# View container logs
make docker-logs

# Restart services
make docker-restart
```

### Port Conflicts
If ports 8000 or 5173 are already in use:
1. Stop other services using these ports
2. Or modify ports in `docker-compose.yml`

### Build Issues
```bash
# Clean everything and rebuild
make clean-docker
make docker-build
```

### Permission Issues
```bash
# Reset Docker volumes
docker compose down -v
make docker-build
make docker-up
```

## 📈 Performance Tips

1. **Use docker-up-detached** for daily development
2. **Check status** regularly with `make status`
3. **Clean periodically** with `make clean-docker`
4. **Use volume mounts** for development (already configured)

## 🔒 Production Considerations

For production deployment:

1. **Build production images**:
   ```bash
   make build
   docker compose -f docker-compose.prod.yml up -d
   ```

2. **Use environment variables** for configuration
3. **Add SSL/TLS termination**
4. **Set up proper logging and monitoring**
5. **Use production-grade database**

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [FastAPI Deployment](https://fastapi.tiangolo.com/deployment/)
- [Vite Production Build](https://vitejs.dev/guide/build.html)

---

For questions or issues, refer to the main [README.md](./README.md) or create an issue in the repository.