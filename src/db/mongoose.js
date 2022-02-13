const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Ben',
    age: 25
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log('Error: ', error)
})