const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// app.use((req, res, next) => {
//     res.status(503).send('Currently it is a maintence window')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app