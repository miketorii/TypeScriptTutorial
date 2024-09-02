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

class Person2 extends Person {
      private _age : number;

      constructor(ssn: string, firstName: string, lastName: string, age: number){
            super(ssn, firstName, lastName);
            this._age = age;
      }

      get age() {
            return this._age;
      }

      set age(argage: number){
            this._age = argage;
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

console.log('-------extend Person---------');
let person2 = new Person2('987654321', 'Mike2', 'Torii2', 100);
console.log( person2.age );
