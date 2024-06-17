let message:string = "Hello Mike";
console.log(message);

function iTakeItAll(first, second, ...others){
    console.log(others);
}

iTakeItAll("foo","bar");
iTakeItAll("foo","bar","bas", "qux");

let foo = 123;
if(true){
    let foo = 456;
}
console.log(foo);

var funcs = [];
for(var i = 0; i<3; i++){
    funcs.push( function(){ console.log(i); } )
}
for(var j=0; j<3; j++){
    funcs[j]();
}

let funcs2 = [];
for(let i = 0; i<3; i++){
    funcs2.push( function(){ console.log(i); } )
}
for(let j=0; j<3; j++){
    funcs2[j]();
}
