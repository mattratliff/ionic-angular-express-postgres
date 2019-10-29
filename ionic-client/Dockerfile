FROM node:8.11.2-alpine as ionic-client

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 8100

# Serve the app
ADD ./docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]