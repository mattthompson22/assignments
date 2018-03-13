var employees = []

var Employee = function (name, jobTitle, salary, status = "Full-time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

function addToEmployees () {
    employees.push();
}
function printEmployeeForm(){
    return Employee();
}

function newEmployee (name, jobTitle, salary, status = "Full-time"){
    let newEmployee = new Employee(name, jobTitle, salary, status = "Full-time");
    addToEmployees();
    printEmployeeForm();
}
var jim = new Employee ("Jim", "Assistant", "$10/hr", "Part-Time");

var sarah = new Employee ("Sarah", "CEO", "$1000/hr");

var bill = new Employee ("Bill", "janitor", "$15/hr");

console.log(newEmployee(sarah));