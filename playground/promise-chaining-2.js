require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('620c0e1520d4499a6d23844b').then((task) =>{
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('620c0e0020d4499a6d238449').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})