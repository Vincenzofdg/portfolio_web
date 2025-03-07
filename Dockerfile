FROM node:18-buster
WORKDIR /usr/app
COPY ["package*.json", "./"]
RUN npm install
COPY . .
