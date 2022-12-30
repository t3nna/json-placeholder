const express = require("express")
const {errorHandler} = require("./middlewares/errorHandler");
const {ping} = require("./controlers/ping");
const {getUsers} = require("./controlers/getUsers");
const {getUser} = require("./controlers/getUser");

const app = express()

//middlewares
app.use(express.json())


//routes
app.get('/ping', ping)
app.get('/users', getUsers)
app.get('/:id', getUser)



// error handler
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))