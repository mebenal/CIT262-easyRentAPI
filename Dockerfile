FROM node

WORKDIR /app

RUN npm install

CMD ["npm", "run", "test"]