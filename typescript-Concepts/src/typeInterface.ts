type Add = (num1: number, num2: number) => number

interface IAdd {

}



const add: Add = (num1, num2) => num1 + num2;

type Friends = string[]; 



interface IFriends {
    [index: number]: string
}



const friends: IFriends = ["A", "B", "C"];