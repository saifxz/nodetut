const path=require('path');

console.log(path.sep)

const p=__dirname

const  filepath=path.join(p,"/path")
console.log(filepath)

const base= path.basename(filepath)//Return the last portion of a path
console.log(base)

const absolute=path.resolve(__dirname,"moduleforjs","path")
console.log(absolute)