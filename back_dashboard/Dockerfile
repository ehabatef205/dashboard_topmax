FROM node:14.19.3

WORKDIR /back_dashboard_App

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 7010

CMD ["npm","run","start"]