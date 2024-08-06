FROM node:latest AS build
ARG WEB_ENVIRONMENT
WORKDIR /app
COPY /Web/package.json ./
RUN npm install
COPY /Web .
RUN npm run build -- -c $WEB_ENVIRONMENT

FROM nginx:1.17.1-alpine
ARG WEB_ENVIRONMENT
COPY /Web/nginx-${WEB_ENVIRONMENT}.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/backoffice /usr/share/nginx/html
