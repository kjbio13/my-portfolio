# base node image
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm install \
    && apk del .gyp

# RUN npm install -g npm@7.5.4

# Copy local nuxt code to the container
COPY . .

# Build production app
RUN npm run build

# Start the service
CMD ["npm", "start"]