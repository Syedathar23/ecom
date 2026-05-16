FROM node:18-alpine
WORKDIR /app/gateway
COPY gateway/package*.json ./
RUN npm install
COPY gateway/ ./
EXPOSE 5000
CMD ["node", "app.js"]
