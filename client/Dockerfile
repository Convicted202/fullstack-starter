# CONTEXT /client
# stage 0
FROM node:10-alpine as build-stage
# setting path args
ARG APP_LOCAL_PATH="webapp"
# copy/install/build app
WORKDIR /usr/src/app
COPY ${APP_LOCAL_PATH}/package*.json ./
RUN npm install
COPY ${APP_LOCAL_PATH} ./
RUN npm run build

# stage 1
FROM nginx:1.15-alpine
# setting path args
ARG NGINX_LOCAL_PATH="nginx"
WORKDIR /etc/nginx
# copy build to nginx root
COPY --from=build-stage /usr/src/app/build/ /var/www
RUN rm ./conf.d/default.conf
COPY ${NGINX_LOCAL_PATH}/nginx.conf ./nginx.conf
COPY ${NGINX_LOCAL_PATH}/conf.d ./conf.d

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
