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
