type Id<T extends string> = {
    type: T,
    value: string
}

type FooId = Id<'foo'>;
type BarId = Id<'bar'>;

const createFoo = (value: string): FooId => ( {type: 'foo', value} );
const createBar = (value: string): BarId => ( {type: 'bar', value} );

let foo = createFoo('sample1');
let bar = createBar('sample2');

console.log(foo);
console.log(bar);

