let anything: any;

anything = "rafiul";

(anything as string)


const kgToGmConverter = (input: string | number) => {


    if(typeof input === 'number'){
        return input * 1000;
    }
    else if(typeof input === 'string'){
        const [value] = input.split(" ")
        return `Converted output is: ${Number(value) * 1000}`
    }
    else{

    }


}




const result = kgToGmConverter(2)
console.log({result})
const result2 = kgToGmConverter("2 KG");
console.log({result2})