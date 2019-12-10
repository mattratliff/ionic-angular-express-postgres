FROM node:12-alpine as ionic-client

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g ionic
RUN npm rebuild node-sass

EXPOSE 8100

COPY . /app

ADD ./docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]