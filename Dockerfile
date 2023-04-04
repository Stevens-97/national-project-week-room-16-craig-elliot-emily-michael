FROM node:alpine
LABEL name="node-alpine-soc"
WORKDIR /app
COPY . /app

RUN npm install -g nodemon
RUN npm install

#Give the path of your endpoint
ENTRYPOINT ["nodemon", "/usr/src/app/server.js"]  

CMD npm run dev
