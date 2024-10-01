// Ex. 4.3.2 (***) - Combining Arrays and Objects
// Create an array of objects representing employees with properties name, age, and department. Write a function
// that groups employees by department.

const employees = [
    {name: 'John', age: 30, department: 'HR'},
    {name: 'Jane', age: 25, department: 'IT'},
    {name: 'Jim', age: 22, department: 'HR'},
    {name: 'Jack', age: 26, department: 'IT'},
    {name: 'Jill', age: 35, department: 'HR'},
    {name: 'Joe', age: 28, department: 'IT'},
    {name: 'Jenny', age: 33, department: 'HR'}
];

function filterEmployeesByDepartment(employees) {
    let departments = {};

    employees.forEach(employee => {
        if (departments[employee.department]) {
            departments[employee.department].push(employee);
        } else {
            departments[employee.department] = [employee];
        }
    });
    return departments;
}

console.log(filterEmployeesByDepartment(employees));