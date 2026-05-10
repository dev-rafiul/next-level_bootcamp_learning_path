// Function 
// arrow and normal



function add(num1: string, num2: number){
    return num1 + num2
}
console.log(add("rafiul", 12))


const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(value: number): number{
        const totalBalance = this.balance + value;
        return totalBalance
    }
}
poorUser.addBalance(100000)


const arr: number[] = [1, 4, 6]

const sqrArray = arr.map((element: number): number => element * element)