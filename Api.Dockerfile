FROM node:latest
WORKDIR /app
COPY /Api/package.json .
RUN npm install
COPY /Api .
EXPOSE 3000
CMD [ "node", "index.js" ]