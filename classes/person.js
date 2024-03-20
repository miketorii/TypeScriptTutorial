var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var message = 'Hello, World!';
console.log(message);
var person = new Person('123456789', 'Mike', 'Torii');
console.log(person.getFullName());
