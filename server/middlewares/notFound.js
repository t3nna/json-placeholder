async function notFound(req, res){
    res.status(404)

    return res. send({messageId: 'page-not-found'})
}

module.exports = {notFound}