const express = require("express")
const {errorHandler} = require("./middlewares/errorHandler");
const {ping} = require("./services/ping");

const app = express()

//middlewares
app.use(express.json())


//routes
app.get('/ping', ping)



// error handler
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))