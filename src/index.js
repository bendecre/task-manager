const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// Middleware function
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//            res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Server is current in maintenance mode, check back later.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('622511139ac46deb8063fdbf')
    // await task.populate('owner')
    // console.log(task.owner)

    const user = await User.findById('621764611397b68ef579e43a')
    await user.populate('tasks')
    console.log(user.tasks)
}

main()