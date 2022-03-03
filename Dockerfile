# build environment
FROM node:16-alpine as build
WORKDIR /app
COPY package.json yarn.lock .env ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# production environment
FROM nginx:stable-alpine
RUN apk add --update nodejs npm
COPY /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY /app/node_modules/cra-envs/package.json ./cra-envs-package.json
RUN npm i -g cra-envs@`node -e 'console.log(require("./cra-envs-package.json")["version"])'`
WORKDIR /usr/share/nginx
COPY /app/build ./html
COPY /app/.env .
COPY /app/package.json .
COPY /app/public/index.html ./public/
ENTRYPOINT sh -c "npx embed-environnement-variables && nginx -g 'daemon off;'"