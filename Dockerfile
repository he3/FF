FROM node:5.10.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app
COPY . /usr/src/app

# Install app dependencies
RUN npm install

EXPOSE 8080

CMD node server.js