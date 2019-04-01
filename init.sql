CREATE SCHEMA testDB;
CREATE TABLE testDB.Users (
    Id int,
    LastName varchar(255),
    FirstName varchar(255) 
);
INSERT INTO testDB.Users VALUES ('1', 'Andrei', 'Oprean');