// Ex. 4.3.1 (***) - Array of Objects
// Write a function that takes an array of objects representing products (with properties name, price, category)
// and returns an array of products that cost more than $20.

let products = [
    {name: 'iPhone', price: 999, category: 'electronics'},
    {name: 'T-shirt', price: 15, category: 'clothing'},
    {name: 'Laptop', price: 1500, category: 'electronics'},
    {name: 'Sneakers', price: 50, category: 'clothing'},
    {name: 'Headphones', price: 200, category: 'electronics'}
];

function filterProducts(products) {
    return products.filter(product => product.price > 20)
}

console.log(filterProducts(products));