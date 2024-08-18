const foo: string[] = new Array(3).fill('a');
console.log(foo);

class Foo<T> {
  foo: T;
}

let FooNumber = Foo as { new (): Foo<number> };
console.log(FooNumber);

let aa = new Foo<number>();
aa.foo = 3;
console.log(aa.foo);
