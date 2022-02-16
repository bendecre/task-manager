require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('620ac434ef049c30af49e79a', { age: 1 }).then((user) =>{
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('620ac434ef049c30af49e79a', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})