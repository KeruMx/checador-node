const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

const corsConfig = { origin: '*', optionsSuccessStatus: 200 }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsConfig))

app.listen(port, () => { console.log(`App running on port ${port}.`)})