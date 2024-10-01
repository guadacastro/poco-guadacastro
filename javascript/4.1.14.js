// Ex. 4.1.14 (**) - Objects
// • Create an object person with properties firstName, lastName, and a method fullName that returns the
// full name.
// • Create an object student with properties name, age, and an array of objects representing courses (with
// courseName and grade). Write a function to log the student’s name and their course grades.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person('John', 'Doe');
let courses = [
    {courseName: 'Math', grade: 95},
    {courseName: 'Science', grade: 85},
    {courseName: 'History', grade: 90}
]

class Student {
    constructor(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    } 
}

function logStudent(student) {
    console.log(`Student: ${student.name}`)
    student.courses.forEach(course => {
        console.log(`Course: ${course.courseName}, Grade: ${course.grade}`)
    })
}

logStudent(new Student(person.fullName(), 25, courses))