const event = require('events')

const fs= require('fs')


const eventEmitter = new event. EventEmitter ();
eventEmitter.addListener('updateResult',()=>{
console. log ("When updateResult event gets invoke call this fucntion");
})
fs.readFile('test.txt','utf8',(err,data)=>{
eventEmitter.emit ('updateResult')
})