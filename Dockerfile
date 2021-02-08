FROM node

WORKDIR /home/"userName"/CIT262-easyRentAPI

COPY . /home/"userName"/CIT262-easyRentAPI

RUN npm install

CMD ["npm", "run", "test"]