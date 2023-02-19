// const users = require('./users')
// // Define a function that returns a promise to get all users and return a promise
// const getAllUsers = ()=>{
    
 
// }
// //Define a function to create a new user and return a promise
// const createUser = (user) => {
    
//  }
// // Define a function to get a user by id and return a promise
// const getAUserByID = (id) =>{
    
// }
// // Define an async function that calls the createUser and getAllUsers function using await 
// // and returns all users
// const displayUsers = async (user) => {
//    const allUsers = null;
//    return allUsers;
// }
// //Define a async function to display a specific user by Id
// // return the user 
// const displayAUser = async(id) =>{
//     const user = null;
//     return user;
// }

// module.exports = {
//     getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
// }


// ============================== Solution ===================================

const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = ()=> new Promise((resolve,reject)=>resolve(users))

//Define a function to create a new user and return a promise
const createUser = (user) => new Promise((resolve,reject)=>{
        if(!user) reject("No user to be added")
        users.push(user)
        resolve(user);
    })
 
// Define a function to get a user by id and return a promise
const getAUserByID = (id) =>new Promise((resolve,reject)=>{
        const user=users.filter(u=>u.id===id)
        if(user) resolve(user)
        reject("User does not exist")
    })

// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
   const allUsers = null;
   const newUser= await createUser(user);
   allUsers=await getAllUsers();
   return allUsers;
}
//Define a async function to display a specific user by Id
// return the user 
const displayAUser = async(id) =>{
    const user = null;
    user= await getAUserByID(id);
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}