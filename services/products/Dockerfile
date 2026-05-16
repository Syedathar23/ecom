FROM node:18-alpine
WORKDIR /app/products
COPY products/package*.json ./
RUN npm install
COPY shared/ /app/shared/
RUN cd /app/shared && npm install
COPY products/ ./
EXPOSE 5002
CMD ["node", "app.js"]
