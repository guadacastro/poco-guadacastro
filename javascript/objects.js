// Ex. 4.1.11 (*) - Objects and Arrays
// • Create an array with the names of five cities. Access and log the third city in the array.
// • Create an array of numbers [5, 10, 15, 20]. Add a number at the end, remove the first number, and log
// the final array.
// • Create an object representing a book with properties title, author, and year. Log the book’s title.


// let cities = ['Barcelona', 'New York', 'Zurich', 'Madrid'];

// function addCity(city) {
//     cities.push(city)
// }
// addCity('Buenos Aires')

// console.log(cities)
// cities[2] = 'Los Angeles';
// console.log(cities)

// // numbers

// let numbers = [5, 10, 15, 20];

// numbers.push(100)
// console.log(numbers)
// numbers.shift();
// console.log(numbers)


class Book {
    constructor(title, author, year) {
        this.title = title,
        this.author = author,
        this.year = year
    }
}

let book1 = new Book('Harry Potter', 'JK Rowling', 1997);

console.log(book1)