const str = "abc";
const strObj = new String(str);
console.log(strObj.length);
console.log(strObj.toUpperCase());

//////////////////////////////////////////
//
let val : any;
val = 1;
console.log("val number: ", val);
val = "mike";
console.log("val string: ", val);
val = { name: "object" };
console.log("val object: ", val);

//////////////////////////////////////////
//
const user : { name: string; age: number } = {
    name: "Mike",
    age: 20
}

console.log(user.name);
console.log(user.age);
