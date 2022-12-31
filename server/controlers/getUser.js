const {getUserById} = require("../services/users");
const {getUsers} = require("./getUsers");

async function getUser(req, res, next){
    try {


        const id = req.params.id
        const user = await getUserById(id)
        if (!user) {
            return next()
        }
        res.send(user)
    }catch (e){
        next(e)
    }
}

module.exports = {getUser}