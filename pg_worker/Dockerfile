FROM node:18-alpine

COPY package.json ./

RUN npm install

COPY worker.js ./

CMD ["npm", "start"]