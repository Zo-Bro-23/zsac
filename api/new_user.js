const db = require('./db')

function new_user(req, resp){
     if (req.method == 'POST'){
         db.any(`insert into users(email, username, password) values('${req.body.email}', '${req.body.username}', '${req.body.password}')`)
             .then(() => resp.send('Success!'))
     }
}
module.exports = new_user