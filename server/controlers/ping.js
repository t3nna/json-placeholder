function ping(req,res, next) {
    const response = {
        message: 'Pong!'
    }
    res.send(response)
}

module.exports = { ping}