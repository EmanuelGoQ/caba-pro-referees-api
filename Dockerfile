# ========== STAGE 1: BUILD ==========
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production deps first to leverage Docker cache layer
RUN npm install --production=false

COPY . .

# ========== STAGE 2: RUNTIME ==========
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy only necessary stuff from builder stage
COPY --from=builder /usr/src/app /usr/src/app

# Env vars (can be overridden in deployment)
ENV NODE_ENV=production \
    PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
