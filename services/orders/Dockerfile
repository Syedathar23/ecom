FROM node:18-alpine
WORKDIR /app/orders
COPY orders/package*.json ./
RUN npm install
COPY shared/ /app/shared/
RUN cd /app/shared && npm install
COPY orders/ ./
EXPOSE 5003
CMD ["node", "app.js"]
