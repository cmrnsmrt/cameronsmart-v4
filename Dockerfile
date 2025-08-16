# Use official Node.js image as the base
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app


# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (Vite build)
RUN npm run build

# Production image
FROM node:20-alpine AS prod
WORKDIR /app


# Copy built assets and necessary files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./



# Install only production dependencies (including Vite for preview)
RUN npm install --production && npm install vite

# Expose port (Vite preview default is 4173)
EXPOSE 4173

# Start the app using Vite preview
CMD ["npx", "vite", "preview", "--port", "4173", "--host"]
