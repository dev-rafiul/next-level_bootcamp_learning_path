// Generic Function

const createArrayWithString = (value: string) => [value];


const createArrayWithNumber = (value: number) => [value];


const createArrayWithUserObj = (value: {id: number; name: string}) => {
    return [value]
}


const arrString = createArrayWithString("Apple")
const arrNum = createArrayWithNumber(222);
const arrObj = createArrayWithUserObj({
    id: 1,
    name: "Rafiul"
})


const createArrayWithGeneric = <T>(value: T) => [value]


const stringarrGeneric = createArrayWithGeneric("Rafiul");
const numberArrGeneric = createArrayWithGeneric(21);
const objGeneric = createArrayWithGeneric({
    name: "Rafiul",
    age: 21
});
console.log(objGeneric)




// tuple 


const createArrayWithTuple = (param1: {
    id: string, name: string
}, param2: number) => [param1, param2]



const createArrayTupleWithGeneric = <X, Y> (param1: X, param2: Y) => [param1, param2] 


const res1 = createArrayTupleWithGeneric("Rafiul", true)

const res2 = createArrayTupleWithGeneric({name: "Rafiul", age: 21}, 222)



// 

const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    }
}


const student1 = {
    id: 123,
    name: "Rafiul",
    hasPen: true,
}
const student2 = {
    id: 124,
    name: "Jhankar",
    hasCar: true,
    isMarried: true
}


const result = addStudentToCourse(student1)
console.log(result)