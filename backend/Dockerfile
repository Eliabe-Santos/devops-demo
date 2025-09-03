FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Variável de ambiente aceita no build
ARG APP_VERSION
ENV APP_VERSION=$APP_VERSION

CMD ["node", "server.js"]
