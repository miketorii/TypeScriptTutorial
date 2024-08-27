const numbers = [1,2,3];

for (const n of numbers) {
    console.log(n);
}

/*
const words = ['This', 'is', 'it'];

for (const [idx, w] of words.entries()){
    console.log(idx, w);
}
*/

const foo = { a: 1, b: 2};
for (const prop in foo){
    console.log(prop, foo[prop]);
}


