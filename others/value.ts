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

const product = {
    name: "Water",
    price: 100,
    getTaxIncludedPrice: function () {
        let val = Math.floor(this.price * 1.1);
        return val;
    },
    expireddate: new Date("2024-08-08"),
};

console.log(product.name);
console.log(product.price);
console.log(product.expireddate);
console.log(product.getTaxIncludedPrice());

//////////////////////////////////////////
//
const myarray = [1,2,3,4,5];
const [a,b,c] = myarray;
console.log(a);
console.log(b);
console.log(c);
const [,,,d,e] = myarray;
console.log(d);
console.log(e);
const [A, ...rest] = myarray;
console.log(A);
console.log(rest);

const mixarr : [string, number] = ["mike",999];
console.log(mixarr);
const mixarr2 : (string|number)[] = [ "tom", 123, "john"];
for (let i=0; i < mixarr2.length; i++){
    console.log(mixarr2[i]);
}

//////////////////////////////////////////
//
const arr = ["a","b","c","d","e"];
for (let i =0; i < arr.length; i++){
    console.log(i, arr[i]);
}
for (const val of arr){
    console.log(val);
}
arr.forEach( (value, i) => { console.log(value, i); } );

//////////////////////////////////////////
//
let user1 : any = { name: "mike"};
console.log(user1.name);
user1.hello = () => { console.log("hello mike"); } ;
user1.age = 100;
user1.hello();
console.log(user1);

