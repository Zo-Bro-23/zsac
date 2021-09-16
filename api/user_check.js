const db = require('./db')

function new_user(req, resp){
    db.any(`select exists(select 1 from users where email= '${req.query.email}')`)
     .then((r) => resp.send(r[0].exists))
}

module.exports = new_user