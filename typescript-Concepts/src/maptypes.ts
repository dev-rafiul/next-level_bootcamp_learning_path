// mapped types

// map


const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[]= ["1, 4, 6"];

const arrayOfStringUsingMap : string[] = arrayOfNum.map((num) => num.toString());



const user = {
    id: 20,

}

user['id']

type AreaOFNum = {
    height: number;
    width: number;
}


type height = AreaOFNum["height"]


type AreaOFString = {
    height: string;
    width: string;
}


type Area<T> = {
    [key in keyof T] : T[key];
}

const area1: Area<{height: string; width: boolean}> = {height: '50',
    width: true
} 

