 # Create image based on the official Node 6 image from the dockerhub
FROM node:12 as express-server

RUN apt update && apt install -y postgresql-client
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app

# Expose the port the app runs in
EXPOSE 8000
EXPOSE 5432

# Serve the app
ADD ./docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]