FROM node:11
WORKDIR /app
COPY package.json /app
COPY init.sql /docker-entrypoint-initdb.d/
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 8080