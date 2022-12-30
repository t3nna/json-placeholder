const {getAllUsers} = require("../services/users");

async function getUsers  (req, res,next){
    const allUsers = await getAllUsers()
    if(!allUsers){
        return next()
    }
    res.send(allUsers)
}

module.exports = {
    getUsers
}