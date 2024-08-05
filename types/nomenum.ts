enum FooIdBrand {}
type FooId = FooIdBrand & string;

enum BarIdBrand {}
type BarId = BarIdBrand & string;

var fooId: FooId;
var barId: BarId;

fooId = 'foo' as FooId;
barId = 'bar' as BarId;

var str: string;
str = fooId;
console.log(str);
str = barId;
console.log(str);
