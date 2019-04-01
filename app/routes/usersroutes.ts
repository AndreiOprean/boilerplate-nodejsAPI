const UserRepository = require('../dbaccess/useraccess.js');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: async function (request, h) {
            let userRepo = new UserRepository();
            let res = await userRepo.getAllUsers();
            if (res){
                if (res.rows.length > 0){
                    return res.rows;
                } else {
                    return "Connection successful, no users currently in the database";
                }
            } else {
                return "No Users";
            }
        }
    },
]