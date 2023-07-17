FROM node:14.19.3

WORKDIR /front_dashboard_topmax

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 4010

CMD ["npm","run","start"]