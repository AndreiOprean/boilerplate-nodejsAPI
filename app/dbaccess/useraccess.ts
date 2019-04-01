const db = require('./index');

module.exports = class UserRepository {
    async getAllUsers() {
        let result = null;
        console.log("Sending select all users query");
        try {
            result = await db.query('SELECT * from Users');
        } catch (e) {
            console.log("Error sending select all query\n" + e);
        }
        return result;
    }

    async devInitializeDB() {
        try {
            await db.query("CREATE SCHEMA testDB");
            await db.query("CREATE TABLE Users (Id int,LastName varchar(255),FirstName varchar(255) )");
            await db.query("INSERT INTO Users VALUES ('1', 'Andrei', 'Oprean')");
        } catch (e) {
            console.log("Error init database\n" + e);
        }
    }
}

