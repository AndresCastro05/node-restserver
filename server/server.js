require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {

})


app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesaio'
        });
    } else {
        res.json({
            persona: body
        });
    }

})

app.put('/usuario', function(req, res) {
    res.json('putusuario')
})

app.delete('/usuario', function(req, res) {
    res.json('deletegetusuario')
})

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', process.env.PORT);
})