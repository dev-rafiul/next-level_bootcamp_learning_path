interface Developer <T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string
        model: string;
        releasedYear: string;
    };
    smartWatch: T
    bike?: X
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}


interface AppleWatch {
    isTimerOk: boolean;
    isConnect: string;
}





const poorDeveloper: Developer<BrandCharaWatch, {
    brand: "Yamaha", engineCapacity: '200CC'
}> = {
    name: "Mr Poor",
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: "A21",
        releasedYear: "2010"
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
    }
}




const richDeveloper : Developer <AppleWatch> = {
    name: "Mr. Jobayer",
    salary: 300000,
    device: {
        brand: "Apple",
        model: "Mac",
        releasedYear: "2021",
    },
    smartWatch: {
        isTimerOk: true,
        isConnect: "Laptop"
    },
    bike: null
}


const add = (num1: number, num2: number = 0) => {
    num1 + num2
}