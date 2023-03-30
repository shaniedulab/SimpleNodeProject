const readline = require('readline');
const fs=require('fs')
const http=require('http');
const url1 = require('url');
const events = require('events');

// const user=require('./modules/user')

// let myEmitter = new events.EventEmitter()
// let myEmitter = new user()

// myEmitter.on('userCreated',(name)=>{
//     console.log("user created",name);
// })

// myEmitter.on('userCreated',(name)=>{
//     console.log("user created",name);
// })

// myEmitter.emit('userCreated','shani')


// let html=fs.readFileSync('./Template/index.html','utf-8')
// console.log(html);

/* create server*/
// const server=http.createServer((req,res)=>{
//     let {query ,pathname:path}=url1.parse(req.url,true)
//     let url=req.url
//     console.log(query);
//     // console.log("new server started",url);
//     if(path==='/' || path.toLocaleLowerCase()=== '/home'){
//         if(!query.id){
//             res.end(html.replace('{{%shani%}}','my name is shani'))
//         }else{
//             res.end("id====="+query.id)
//         }
//     }else if(path.toLocaleLowerCase()=== '/about'){
//         res.end("You are in about page")
//     }else if(path.toLocaleLowerCase()=== '/contact'){
//         res.end("You are in contact page")
//     }else {
//         res.end("Error 404 Page not found")
//     }
// })

// const server=http.createServer();

// server.on('request', (req,res)=>{
//     let {query ,pathname:path}=url1.parse(req.url,true)
//     let url=req.url
//     console.log(query);
//     // console.log("new server started",url);
//     if(path==='/' || path.toLocaleLowerCase()=== '/home'){
//         if(!query.id){
//             res.end(html.replace('{{%shani%}}','my name is shani'))
//         }else{
//             res.end("id====="+query.id)
//         }
//     }else if(path.toLocaleLowerCase()=== '/about'){
//         res.end("You are in about page")
//     }else if(path.toLocaleLowerCase()=== '/contact'){
//         res.end("You are in contact page")
//     }else {
//         res.end("Error 404 Page not found")
//     }
// })


//start server
// server.listen(8000,'127.0.0.1',()=>{
//     console.log("server has started!");
// })

// server.on('request',(req,res)=>{
//     let rs=fs.createReadStream('./Files/bigfile.txt')
//     rs.on('data',(chunk)=>{
//         res.write(chunk)
//         res.end()
//     })

//     rs.on('end',()=>{
//         res.end()
//     })

//     rs.on('error',(err)=>{
//         res.end(err.message)
//     })

// })

// server.on('request',(req,res)=>{
//     let rs=fs.createReadStream('./Files/bigfile.txt')
//     rs.pipe(res)

// })

/*7 Reading and writing file 

fs.readFile('./Files/start.txt','utf-8',(error,data)=>{
    console.log(data);
    fs.readFile(`./Files/${data}.txt`,'utf-8',(error1,data1)=>{
        console.log(data1);
        fs.readFile('./Files/append.txt','utf-8',(error2,data2)=>{
            console.log(data2);
            fs.writeFile('./Files/output.txt',`${data1}\n\n${data2}\n\n${new Date()}`,()=>{
                console.log('succes');
            })
        })
    })
})*/


/*5 Reading and writing file 

let textIn=fs.readFileSync('./Files/input.txt','utf-8')
console.log(textIn);

fs.writeFileSync('./Files/output.txt',`shani ${textIn} \n dare ${new Date()}`)*/


/* 4 read write input output
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Pleace enter your name : ",(name) => {
    console.log(name);
    rl.close();
});

rl.on('close',() => {
    console.log("interface close");
    process.exit(0);
})*/

// 3
// console.log("Hello form NODE JS");


/////////////////////////////////////////////////////////Event Loop//////////////////////////////////////////////////////////////////////////////

console.log("program start");

//strire in 1st phase
setTimeout(() => {
    console.log("timer");
},0)

//strire in 2nd phase

fs.readFile('./Files/input.txt',(err, data) => {
    console.log("file read");
})

//strire in 3rd phase
setImmediate(() => {
    console.log("setImmediate");
})
console.log("program complete");