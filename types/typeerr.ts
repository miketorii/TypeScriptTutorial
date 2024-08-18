type SomethingComplex = {
  foo: number;
  bar: string;
};

function takeSomethingComplex(arg: SomethingComplex) {
  console.log(arg.foo);
  console.log(arg.bar);
}

function getBar(): string {
  return 'some bar';
}

const fail = {
  foo: 123,
  bar: getBar()
};

takeSomethingComplex(fail);
