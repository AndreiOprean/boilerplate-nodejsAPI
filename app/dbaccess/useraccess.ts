const db = require('./index.js');

module.exports = class UserRepository {
    async getAllUsers() {
        let result = null;
        console.log("Sending select all users query");
        try {
            result = await db.query('SELECT * from "Users"');
        } catch (e) {
            console.log("Error sending select all query");
        }

        return result;
    }
}

