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

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`)
})