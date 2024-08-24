FROM node AS build-stage

ENV NPM_CONFIG_REGISTRY=https://registry.npm.taobao.org

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

FROM nginx

COPY --from=build-stage dist/ /app/nghtml

EXPOSE 80
