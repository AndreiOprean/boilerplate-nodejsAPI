# boilerplate-nodejsAPI
Boilerplate code for a NodeJS API using PostgreSQL, HapiJS and TypeScript

Whithout Docker

1.Create a .env file in the root of the directory with the following structure  
  PGHOST="localhost"  
  PGUSER="postgres" //default postgres user  
  PGDATABASE="your database name"  
  PGPASSWORD="your password"  
  PGPORT=5432 //default postgres port  
2.Create a table called "Users" with the fields "Id", "FirstName", "LastName"  
3.npm install  
4.npm run dev  

With Docker

1.docker build -t node-api .  
2.docker-compose up
