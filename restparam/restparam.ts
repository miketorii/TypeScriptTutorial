let message:string = "Hello Mike";
console.log(message);

function iTakeItAll(first, second, ...others){
    console.log(others);
}

iTakeItAll("foo","bar");
iTakeItAll("foo","bar","bas", "qux");
