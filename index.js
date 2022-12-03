const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 4002

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        msg: 'Hola mundo Test Tecnow'
    })
})

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    const { nombre } = req.body
    sms = `Hola ${nombre}`
    res.send({
        sms
    })
})

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})