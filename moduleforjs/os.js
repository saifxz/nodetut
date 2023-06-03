const os=require('os')
console.log(os.userInfo())
console.log(os.version())
console.log(os.uptime()/(60*60*60))
console.log(os.release())
const curros={
    name:os.type(),
    release:os.release(),
    totalmemory:(os.totalmem())/(1000000),
    freememory:os.freemem()
    
}
console.log(curros)