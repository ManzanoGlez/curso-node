const http = require("http");
 
http.createServer((req,res)=>{


res.writeHead(200,{'Content-Type':'application/json'})


let output = {
    name:"Jorge Manzano",
    years:"24",
    status:"La verga"
}

res.write(JSON.stringify(output));

res.end();


}).listen(8080);

console.log("Escuchando..")