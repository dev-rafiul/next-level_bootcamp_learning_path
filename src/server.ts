import { createServer } from "http";
import { port, routeHandler } from "./routes/route";



const server = createServer((req, res) => {


routeHandler(req, res)

})




server.listen(port, () => {
    console.log("Server is Running on Port", port)
})


