// dynamically 


type GenericArray<value> = Array<value>;




// const friends : string[] = ["Mr.X", "Mr. Y"]
const friends : GenericArray<string> = ["Mr.X", "Mr. Y"]


const rollNumbers: GenericArray<number> = [4, 7, 11];

const eligibleList: GenericArray<boolean> = [true, false, true]


type Coordinates<X, Y> = [X, Y]

const coordinates: Coordinates<string, Number> = ["Rafiul", 21]



const userList: GenericArray<{
    name: string, age: number
}> = [
    {
        name: "Mr, X",
        age: 21
}, {
    name: "Mr, Y",
    age: 25
}
]