const db = require('./db')

function block(req, resp) {
    if (req.method == 'GET'){
        db.any(`select * from blocklist where blocker= '${req.query.email}'`)
            .then((r) => resp.send(r.map((o) => o.blocked)))
    }else if (req.method == 'POST')
        db.any(`insert into blocklist(blocker, blocked) values('${req.body.email}', '${req.body.block}')`)
            .then(() => resp.send('Success!'))
}

module.exports = block