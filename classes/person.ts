class Person {
      private ssn: string;
      private _firstName: string;
      private _lastName: string;

      constructor(ssn: string, firstName: string, lastName: string){
      		       this.ssn = ssn;
		       this._firstName = firstName;
		       this._lastName = lastName;
      }

      getFullName(): string {
      		     return this._firstName + ' ' + this._lastName;
      }

      get firstName(){
            return this._firstName;
      }

      set firstName(firstname: string){
            this._firstName = firstname;
      }

}

let message: string = 'Hello, World!';
console.log(message);

let person = new Person('123456789', 'Mike', 'Torii');
console.log( person.getFullName() );

console.log('-------get set---------');
console.log( person.firstName );
person.firstName = "John";
console.log( person.firstName );
