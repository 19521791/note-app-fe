FROM node:14-stretch-slim as build

WORKDIR /app

COPY . /app

RUN npm install -g npm@latest

RUN npm cache clean --force

RUN npm install && npm run build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

