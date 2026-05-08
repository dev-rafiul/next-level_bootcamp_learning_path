// conditional type : je type condition er upor nirborshil


type A = null
type B = undefined
type C = A extends null ? true : B extends undefined ? true : false;



type richPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
}


type CheckVehicle<T> = T extends "bike" | "Car" | "Ship" ? true : false


type HasBike = CheckVehicle<"bike">