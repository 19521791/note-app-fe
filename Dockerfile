FROM node:18-alpine as build-stage

WORKDIR /app

COPY . /app

RUN npm install -g npm@10.0.0

RUN npm install

RUN npm run build

FROM nginx:1.17-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

