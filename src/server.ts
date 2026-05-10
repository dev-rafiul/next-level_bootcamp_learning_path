import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer((req : IncomingMessage, res: ServerResponse) => {
    console.log(req.url)
    console.log(req.method)

    const url = req.url
    const method = req.method

    if(url === '/' && method === "GET"){
   

        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify({message: "This is root Route"}))
        
        
        // console.log("This is Root Route")
    }
    
    else if(url?.startsWith("/products")) {
        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify({message: "This is Product Route"}))

    }
        else {
        res.writeHead(404, {"content-type" : "application/json"})
        res.end(JSON.stringify({message: "Route not Found"}))
    }



})


server.listen(5000, () => {
    console.log("Server is Running on the PORT: 5000")
})