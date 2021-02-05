const person = {
    name: "Anderson",
    lname: 'Samuel',
    age: 34,
    salary: 30000,
    greet: function () {
        console.log('Hello !!');
    },
    getFullName: function () {
        return this.lname + ' ' + this.name;
    },
    chargeTax: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}
person.getFullName();
// console.log(a);
console.log(person.getFullName);



const heroPerson = {
    fname: 'Hero',
    lname: 'Balam',
    age: 39,
    salary: 50000
}
// log person 
console.log(person.getFullName);
console.log(person);

// bind 
const b = person.getFullName.bind(heroPerson);
console.log(b);