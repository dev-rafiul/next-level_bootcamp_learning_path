import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";


export const productController = async(req:IncomingMessage, res:ServerResponse) => {

    const url = req.url;
    const method = req.method


    const urlParts = url?.split('/')

    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null;

   

    //GET All Products

    if(url === "/products" && method === "GET"){  
        
        const products = readProduct();
        
        

        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({message : "This is Products Route", data: products}))
    }
    else if(method === "GET" && id !== null){
        
        const product = readProduct().find((p: IProduct) => p.id === id)

        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({message : "This is Products Route", data: product}))

    }
    else if(method === "POST" && url === "/products"){

        const body = await parseBody(req);
        

        const newProduct = {
            id: Date.now(),
            ...body
        }



        const products = readProduct()
        products.push(newProduct);

    console.log(products)

        



    console.log(newProduct)

    insertProduct(products)

    res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify({message : "Products Created Successfully and also Updated", 
            data: products
        }))
    }
    else if(method === "PUT" && id !== null){
        const body = await parseBody(req)
        const products  = readProduct()


        const index = products.findIndex((p: IProduct) => p.id === id)


    }
    
}