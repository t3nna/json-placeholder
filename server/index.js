const express = require("express")
const {errorHandler} = require("./middlewares/errorHandler");
const {ping} = require("./controlers/ping");
const {getUsers} = require("./controlers/getUsers");
const {getUser} = require("./controlers/getUser");
const {notFound} = require("./middlewares/notFound");
const {addUser} = require("./controlers/addUser");

const app = express()

//middlewares
app.use(express.json())


//routes
app.get('/ping', ping)
app.get('/users', getUsers)
app.get('/users/:id', getUser)

app.post('/user', addUser)



// error handler
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))