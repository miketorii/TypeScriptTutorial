class Person {
      ssn: string;
      firstName: string;
      lastName: string;

      constructor(ssn: string, firstName: string, lastName: string){
      		       this.ssn = ssn;
		       this.firstName = firstName;
		       this.lastName = lastName;
      }

      getFullName(): string {
      		     return this.firstName + ' ' + this.lastName;
      }
}

let message: string = 'Hello, World!';
console.log(message);

let person = new Person('123456789', 'Mike', 'Torii');
console.log( person.getFullName() );


