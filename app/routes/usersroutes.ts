const UserRepository = require('../dbaccess/useraccess.js');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: async function (request, h) {
            let userRepo = new UserRepository();
            let res = await userRepo.getAllUsers();
            if (res){
                return res.rows;
            } else {
                return "No Users";
            }
        }
    },
]