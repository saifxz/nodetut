
//the properties which take function as argument are async functions


const fs=require('fs');
console.log("start")
fs.readFile('./text.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    const first =result;
    fs.readFile("./text2.txt",'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
        const second=result;
        fs.writeFile("./newfile",`${first} + ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log(result)//for writefile function result is indefined
        })
    })
})

console.log("end")

console.log("-----------------------------------")

console.log("start")

fs.writeFile("./text.txt","in text.txt",(err,result)=>{
    console.log("rewriting text.txt")
})
fs.readFile("./text2.txt","utf8",(err,result)=>{
    console.log("reading text2.txt")
})

console.log("end")
// 
// mindgrenade

const num1=3;
const num2=5;

function addValues(){
    console.log(`nums : ${num1} + ${num2} = ${num1+num2}`)

}
addValues();