
// setInterval(() => {
//     console.log("Async")
// }, 1000);
require("./fileAsync")

const fs=require('fs')
const get=fs.readFileSync('./text.txt','utf8')
const get2=fs.readFileSync("./text2.txt",'utf8')
console.log(get)
console.log(get2)


fs.writeFileSync('./text.txt','saif is not a idiot')

fs.writeFileSync(`./newfile`,`i am fuck`)//if file is not there it will create a newfile




//mindgrenade

// require('./fileAsync')