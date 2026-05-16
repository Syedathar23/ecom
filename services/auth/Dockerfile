FROM node:18-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /app/auth
COPY auth/package*.json ./
RUN npm install
COPY shared/ /app/shared/
RUN cd /app/shared && npm install
COPY auth/ ./
EXPOSE 5001
CMD ["node", "app.js"]
