# Use Node.js 20 Alpine image for smaller size
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=development

# Install system dependencies for building native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    curl

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Expose port
EXPOSE 5173

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:5173/ || exit 1

# Command to run the application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]