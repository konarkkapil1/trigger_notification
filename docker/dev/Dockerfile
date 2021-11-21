FROM node:alpine

RUN rm -rf /var/www && mkdir /var/www
WORKDIR /var/www

COPY ./package.json .
RUN npm install

EXPOSE 3000
COPY . .
CMD ["npm", "run", "start:dev"]