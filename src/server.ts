import { createServer } from "http";
import { routeHandler } from "./routes/route";



const server = createServer((req, res) => {


routeHandler(req, res)

})



const port = 3000;

server.listen(port, () => {
    console.log("Server is Running on Port", port)
})


