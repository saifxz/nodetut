//Global variables - no Window
console.log(__dirname)
// console.log(__filename)
//require module
//process 

const names=require(`./names`)//importing names file

console.log(names)


const i=require(`./impfile`)//importing impfile file 


console.log(i)

console.log(i.obj.a)
console.log(i.items[1])
