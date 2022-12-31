const userService = require('../services/users')

async function addUser(req, res, next) {
    try{
        const {user} = req.body
        // console.log(user)

        await userService.addUser(user)

        return res.send({status: 'success'})
    }catch (e) {
        next(e)
    }
}

module.exports ={addUser}