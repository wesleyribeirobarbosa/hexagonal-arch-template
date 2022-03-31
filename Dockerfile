FROM node:16.14.0 AS build
ENV NODE_ENV=dev

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD ["npm", "run", "dev"]