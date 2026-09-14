FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY server.js ./
COPY radio_catalog.json ./

EXPOSE 3000

CMD ["npm", "start"]
