class Person {
    constructor(public age:number){}

    growOld = () => {
        this.age++;
    }
}

var person = new Person(1)
setTimeout(person.growOld, 1000)

setTimeout(function(){ console.log(person.age) }, 3000)

///////////////////////////////////////////////
//
const sayHello = (name: string) : string => 'Hello '+name;
const ret = sayHello("mike");
console.log(ret);

function getbirdinfo(name: string) : string[] {
    return name.split(",");
}

function singbirds(birdinfo: (x: string) => string[] ) : string {
    return birdinfo("hato, kiji, kamo")[2] + " piyo piyo";
}

console.log(singbirds(getbirdinfo));

