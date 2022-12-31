const path = require('path')
const {BadRequestError} = require("../module.error");
const fs = require('fs').promises

const usersPath = path.resolve(__dirname, '../db/users.json')

async function getAllUsers() {
    try {

        let data = await require(usersPath)


        return data

    } catch (e) {
        console.log(e)

    }
}

async function getUserById(id){
    try{
        const data = await require(usersPath)
        // console.log(data)
        const res = await data.find(user =>{
                // console.log(user, '\n', '##########')
            return  user.id == id
        }
        )
        return res

    }catch (e){
        console.log(e)

    }
}

async function addUser(user){
    const usersDb = await require(usersPath)
    console.log(user)
    console.log(usersDb)

    const userInDb = usersDb.find((singleUser) => singleUser.id ===user.id)

    if(userInDb){
        throw new BadRequestError('user-with-this-id-already-exist')
    }

    user.id = usersDb.length+1

    usersDb.push(user)
    //
    await fs.writeFile(usersPath, JSON.stringify(usersDb, null, 2), 'utf-8')

}



module.exports = {
    getAllUsers,
    getUserById,
    addUser

}

