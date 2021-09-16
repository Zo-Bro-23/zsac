const db = require('./db')

function all_users(req, resp){
    db.any(`select * from users where email <> '${req.query.email}'`)
        .then((r) => resp.send(r))
}

module.exports = all_users