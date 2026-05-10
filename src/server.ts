import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer((req : IncomingMessage, res: ServerResponse) => {
    console.log(req.url)
    console.log(req.method)
})


server.listen(5000, () => {
    console.log("Server is Running on the PORT: 5000")
})