interface FooId extends String {
    _fooIdBrand: string;
}

interface BarId extends String {
    _barIdBrand: string;
}

var fooId: FooId;
var barId: BarId;

//fooId = barId; // error
//barId = fooId; // error
//fooId = <FooId>barId; // error
//barId = <BarId>fooId; // error

fooId = "foo" as any;
console.log(fooId);

var str: string;
str = fooId as any;
console.log(str);
