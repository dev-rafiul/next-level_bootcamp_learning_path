const getUser = (input: string | null) => {
    if(input){
        console.log(`From DB ${input}`)
    }
    else{
        console.log(`From DB All User`)
    }
}

getUser(null)


const productDiscoutCalculator = (input:unknown) => {

    if(typeof input === 'number'){
        const discountedPrice = input * 0.1
        console.log(discountedPrice)
    }
    else if (typeof input === 'string'){
        const splitted = input.split(" ")
        console.log(splitted)
    }

    else {
        console.log("Wrong Input")
    }
}

productDiscoutCalculator(100)
productDiscoutCalculator("100")
productDiscoutCalculator(null)



// void

const throwError = (msg: string): never => {
    throw new Error(msg)
}

throwError('...Error')