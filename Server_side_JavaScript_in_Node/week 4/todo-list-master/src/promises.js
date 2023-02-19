// const todolist = require('./todolist')

// // Define a function that gets all the todos from the 
// // todolist array declared asynchronously after 2 seconds
// getAllTodos = () => {
//     return new Promise((resolve,reject)=>{
        
//         }) 
    
// }
// // Define a function to add a todo to the todolist array
// createTodo = (todo) => {
//    return new Promise((resolve,reject)=>{
      
//    })
// }
// module.exports ={
//     createTodo,getAllTodos
// }



//================================ Solution ===================================

const todolist = require('./todolist')

// Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => new Promise((resolve,reject)=>setTimeout(()=>resolve(todolist),2000)) 

// Define a function to add a todo to the todolist array
createTodo = (todo) => new Promise((resolve,reject)=>{
    if (typeof todo !== 'object' || !todo) reject('No data to be added')
    todolist.push(todo)
    resolve(getAllTodos())
   })

module.exports ={
    createTodo,getAllTodos
}