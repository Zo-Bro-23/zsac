const db = require('./db')

function chat(req, resp){
    db.any(`select * from messages where messages.from= '${req.query.one}' and messages.to= '${req.query.two}' or messages.to= '${req.query.one}' and messages.from= '${req.query.two}'`)
        .then((r) => resp.send(r))
}

module.exports = chat