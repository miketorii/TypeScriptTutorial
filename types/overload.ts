interface Overloaded {
    (foo: string): string
    (foo: number): number
}

function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
    if (typeof foo === 'number') {
        return 1 + foo;
    } else if (typeof foo === 'string') {
        return "Mike and "+foo;
    }
}

const overloaded: Overloaded = stringOrNumber;

console.log(overloaded("Tom"));
console.log(overloaded(999));
