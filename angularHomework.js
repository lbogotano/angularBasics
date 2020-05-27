// function sayHello(person: string): string {
//     return "Hello, " + person;
//    }
//    var user = "Super Student";
//    document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zip, occupation, hourlyWage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    //Getters
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Person.prototype.getPersonData = function () {
        return this.getFullName() + " " + this.phoneNumber;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.getZip = function () {
        return this.zip;
    };
    Person.prototype.getCerts = function () {
        return this.certs;
    };
    // Setters
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.setZip = function (zip) {
        this.zip = zip;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getWeeklyWage = function (hours) {
        if (hours) {
            return this.hourlyWage * hours;
        }
        else {
            return this.hourlyWage * 40;
        }
    };
    Person.prototype.getNameAndWage = function () {
        return this.getFullName() + " " + this.getWeeklyWage();
    };
    // adding certs
    Person.prototype.addCerts = function () {
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        for (var i = 0; i < certs.length; i++) {
            this.certs.push(certs[i]);
        }
    };
    // Static method to add new person
    Person.newPerson = function (config) {
        var newPerson = {
            firstName: "Jhon",
            state: "FL"
        };
        return newPerson;
    };
    return Person;
}());
var person1 = new Person("Carlos", "Gomez", 45, 9803456789, "NC", 28216, "Mechanic", 25);
var person2 = new Person("Mario", "Lopez", 24, 7045690345, "NC", 28210, "Car Salesman", 34);
var person3 = new Person("Mike", "Rojas", 57, 7182493150, "NY", 11368, "Insurance agent", 45);
var person4 = new Person("Tania", "Michels", 45, 9802345467, "NC", 28212, "Secretary", 19);
//  Output Section 
document.getElementById("person1").textContent = person1.getFullName();
document.getElementById("person2").textContent = person2.getOccupation();
document.getElementById("person3").textContent = person3.getPersonData();
document.getElementById("person4").textContent = person4.getNameAndWage();
