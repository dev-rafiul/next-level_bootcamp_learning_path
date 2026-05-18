import type { IncomingMessage, ServerResponse } from "http";

export const routeHandler = (req: IncomingMessage, res:ServerResponse) => {

    const url = req.url;
    const method = req.method

    if(url === "/" && method === "GET"){
        res.writeHead(200, {"content-type" : "application/json"});
        res.end(JSON.stringify({message: "This is Route Route"}));
    }
    else if(url?.startsWith("/products")){
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({message : "This is Root Route"}))
    }
    else{
        res.writeHead(404, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "Route not Found"}))
    }


}