const db = require('./db')

function send(req, resp){
    if(req.method == 'POST'){
        db.any(`insert into messages values('${req.body.from}', '${req.body.to}', '${req.body.message}')`)
            .then((r) => resp.send('Success!'))
    }
}

module.exports = send