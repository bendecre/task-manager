// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectId("6204eeb4b09e916fe28c2d5b") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 25 }).count((error, users) =>{
    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectId("6204eeb4b09e916fe28c2d5e") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, task) => {
        console.log(task)
    })
})