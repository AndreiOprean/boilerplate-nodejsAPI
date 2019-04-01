const UserRepository = require('../dbaccess/useraccess.js');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: async function (request, h) {
            let userRepo = new UserRepository();
            let res = await userRepo.getAllUsers();
            if (res) {
                if (res.rows.length > 0) {
                    return res.rows;
                } else {
                    return "Connection successful, no users currently in the database";
                }
            } else {
                return "No Users";
            }
        }
    },
    {
        method: 'POST',
        path: '/add',
        handler: async function (request, h) {
            const payload = request.payload;
            try {
                let userRepo = new UserRepository();
                await userRepo.addUser(payload);
            } catch (e) {
                return "error adding user"
            }
            return "Added user";
        }
    }
]