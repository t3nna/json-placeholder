const {getUserById} = require("../services/users");
const {getUsers} = require("./getUsers");

async function getUser(req, res, next){
    const id =   req.params.id
    const user = await getUserById(id)
    if(!user){
        return next()
    }
    res.send(user)
}

module.exports = {getUser}