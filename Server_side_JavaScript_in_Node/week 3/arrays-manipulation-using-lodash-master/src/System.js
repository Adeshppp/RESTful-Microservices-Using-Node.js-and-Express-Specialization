
//import OS module
const os=require('os')

//Create a function to get the name of the operating system of host machine.​
function osName(){
  return os.platform();
}

//Create a function to get returns the number of free memory of the system in bytes.​
function getFreeMemory(){
  return os.freemem();
}

//Create a function to get the information about current user of the system.​
function getCurrentUser(){
  return os.userInfo();
}

//Create a function to get the information of the hostname.
function getHostName(){
  return os.hostname();
}

//Create a function to get the information about the CPU.
function getCPUDetails(){
  return os.cpus();
}


module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}



// //import OS module
// const os=require('os')

// //Create a function to get the name of the operating system of host machine.​
// const hostName=os=>os.hostname();

// //Create a function to get returns the number of free memory of the system in bytes.​
// // const getFreeMemory=os

// //Create a function to get the information about current user of the system.​


// //Create a function to get the information of the hostname.

// //Create a function to get the information about the CPU.
// const getCpuInfo = os => os.cpus()


// module.exports = {
//   getOSName,
//   getFreeMemory,
//   getCurrentUser,
//   getHostName,
//   getCPUDetails
// }