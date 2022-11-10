FROM node:16-alpine

COPY package*.json ./
RUN npm install -g npm@8.19.3
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "node","index.js" ]
