const db = require('./db')

function user_data(req, resp){
    db.any(`select * from users where email= '${req.query.email}'`)
        .then((r) => resp.send(r[0]))
        .catch(() => resp.send('Error!'))
}

module.exports = user_data