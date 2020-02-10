const app = module.exports = require('express')();

app.get('/', function (req, res) {
    res.send('Server is running on port ' + 8080)
})

app.use('/user', require('./user'))
app.use('/content', require('./content'))