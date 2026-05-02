

const biyerJonnoEligible = (age: number) => {
    
    // if(age >= 21){
    //     console.log("You are Eligible")
    // }
    // else{
    //     console.log("You are not Eligible")
    // }


    const result = age >= 21 ? "You are Eligible" : "You are Not Eligible";

    console.log(result)

}

biyerJonnoEligible(21)




const userTheme = undefined;

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme)




const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are Guest"
const resultWithNullish = isAuthenticated ?? "You are Guest"
// const resultWithTernary = isAuthenticated ? isAuthenticated : "You are Guest"


console.log({resultWithNullish}, resultWithTernary)




// optional chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string;
    }
} = {
    address: {
        city: "Dhaka",
        town: "Banani"
    }
}
