FROM node:16.15

RUN mkdir -p /user/src/app
WORKDIR /user/app

COPY package.json /user/

RUN node -v
RUN npm -v

RUN npm install -g npm@8.12.1

RUN npm -v

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]