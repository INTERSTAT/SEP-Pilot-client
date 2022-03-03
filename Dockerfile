# build environment
FROM node:16-alpine as build
WORKDIR /app
COPY package.json yarn.lock .env ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx
COPY --from=build /app/build ./html