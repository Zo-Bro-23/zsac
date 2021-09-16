const db = require('./db')

function messages(req, resp){
    db.any(`select * from users, messages where messages.to= '${req.query.email}' and users.email= messages.from or messages.from= '${req.query.email}' and users.email= messages.to`)
        .then((r) => resp.send(r))
}

module.exports = messages