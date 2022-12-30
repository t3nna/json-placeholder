const path = require('path')
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



module.exports = {
    getAllUsers,
    getUserById
}

