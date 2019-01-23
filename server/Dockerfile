# context /client
# stage 0
FROM node:10-alpine
LABEL maintainer="Alexander Yanovych"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src ./src/

EXPOSE 3000
CMD ["npm", "start"]
