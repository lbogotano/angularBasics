// function sayHello(person: string): string {
//     return "Hello, " + person;
//    }
//    var user = "Super Student";
//    document.getElementById("para").innerHTML = sayHello(user);


class Person {

    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: number;
    private state: string;
    private zip: number;
    private occupation: string;
    private hourlyWage: number;
    private certs: string[];

    constructor(firstName: string, lastName: string, age?: number, phoneNumber?: number, state?: string, zip?: number, occupation?: string, hourlyWage?: number) {
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

    getFullName():string {
        return this.firstName + " " + this.lastName;
    }
    getPhoneNumber(): number{
        return this.phoneNumber;
    }
    getPersonData(): string {
        return this.getFullName() +" "+ this.phoneNumber;
    }
    getAge(): number{
        return this.age;
    }
    getOccupation(): string{
        return this.occupation;
    }
    getState(): string{
        return this.state;
    }
    getZip(): number{
        return this.zip;
    }

    getCerts(): string[] {
        return this.certs;
    }



    // Setters
    
    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setPhoneNumber(phoneNumber: number): void {
        this.phoneNumber = phoneNumber;
    }

    setState(state: string): void {
        this.state = state;
    }

    
    setZip(zip: number): void {
        this.zip = zip;
    }

    setOccupation(occupation: string): void {
        this.occupation = occupation;
    }




    private getWeeklyWage(hours?: number): number {
        if(hours) {
            return this.hourlyWage * hours;
        } else {
            return this.hourlyWage * 40;
        }
    }

    getNameAndWage(): string {
        return this.getFullName() + " " + this.getWeeklyWage();
    }

    // adding certs

    addCerts(...certs: string[]){
        for(let i = 0; i < certs.length; i++){
            this.certs.push(certs[i]);
        }
    }

    // Static method to add new person

    public static newPerson(config: PersonOptions):{ firstName: String, state: String } {
        let newPerson = {
            firstName: "Jhon",
            state: "FL",
        }
        return newPerson;
    }

}
// End of class Declaration

// Interfaces

interface PersonOptions {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: number;
    state?: string;
    zip?: number;
    occupation?: string;
    hourlyWage?: number;
}


let person1 = new Person("Carlos", "Gomez", 45, 9803456789, "NC", 28216, "Mechanic", 25);

let person2 = new Person("Mario", "Lopez", 24, 7045690345, "NC", 28210, "Car Salesman", 34);

let person3 = new Person("Mike", "Rojas", 57, 7182493150, "NY", 11368, "Insurance agent", 45);

let person4 = new Person("Tania", "Michels", 45, 9802345467, "NC", 28212, "Secretary", 19);



//  Output Section 

document.getElementById("person1").textContent = person1.getFullName();
document.getElementById("person2").textContent = person2.getOccupation();
document.getElementById("person3").textContent = person3.getPersonData();
document.getElementById("person4").textContent = person4.getNameAndWage();