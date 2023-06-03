

const http=require('http')

const server1=http.createServer((req,res)=>{//request respond
    
    if(req.url==='/'){
        res.end ('Home page');
    }
    if(req.url==='/about'){
        res.end('about page');
    }
    res.end(
        
        `<h1>Wrong page</h1>
        <p> default page if url does not match</p>
        <a href="/">back home </a>`)
        
})
server1.listen(5000)









