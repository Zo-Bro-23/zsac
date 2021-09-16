const express = require('express')
const app = express()
const port = 5210
const new_user = require('./api/new_user')

app.get('/', new_user)

app.listen(port, () => console.log('Listening at https://localhost:5210'))