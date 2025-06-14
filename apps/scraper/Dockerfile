# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

# Copy the entire project
COPY . .

# Install dependencies
RUN npm ci

# Build the scraper project
RUN npx nx build scraper

# Set the command to run the scraper
CMD ["node", "apps/scraper/dist/main.js"] 