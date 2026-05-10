// constraint : strict rules deya


type Student = {
    id: number; name: string; dateOFBirth: string; class: string;
}

const addStudentToCourse = <T extends Student> (studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};


const student1 = {
    id: 123,
    name: "Rafiul",
    dateOFBirth: "20 May 2026",
    hasWatch: true,
    class: "One"
}

const result = addStudentToCourse(student1)
console.log(result)