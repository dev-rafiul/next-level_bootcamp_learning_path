// keyof : type operator


type RichPeoplesVehicle = {
    car: string;             // key: Value
    bike: string;
    cng: string;
}


type MyVehicle1 = "Bike" | "Car" | "CNG";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle1 = "Bike";



type User = {
    id: number;
    name: string;
    address: {
        city: string
    };
};


const user = {
    id: 222,
    name: "Rafiul",
    address: {
        city: "Ctg",
    },
};

const myId = user['id'];


const myName = user['name']

const address = user['address'].city
console.log(address)

const product = {
    brand: "HP"
}

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
}

const student = {
    id: 123,
    class: "four"
}



const result = getPropertyFromObj(user, "id")

const result2 = getPropertyFromObj(product, "brand")


const result3 = getPropertyFromObj(student, "id")



