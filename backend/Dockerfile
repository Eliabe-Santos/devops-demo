FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Definir variável de ambiente para ser usada pelo Node.js
ARG APP_VERSION
ENV APP_VERSION=$APP_VERSION

CMD ["node", "server.js"]



