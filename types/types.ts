//////////////////////////////////////////////////
//  enum
// https://github.com/basarat/typescript-book

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

//var card = CardSuit.Clubs;
var card = CardSuit.Diamonds;
console.log('----------');
console.log(card);

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}

console.log('enum Color: ', Color.DarkGreen);

enum AnimalFlags {
  None = 0,
  HasClows = 1 << 0,
  CanFly = 1 << 1,
  EatsFish = 1 << 2,
  Endangered = 1 << 3
}

console.log('enum AnimalFlags.HasClows=', AnimalFlags.HasClows);
console.log('enum AnimalFlags.EatsFish=', AnimalFlags.EatsFish);
console.log('enum AnimalFlags.Endangered=', AnimalFlags.Endangered);

//////////////////////////////////////////////////
//  interface

export namespace Implement {
  interface Point {
    x: number;
    y: number;
  }

  export class MyPoint implements Point {
    x: number;
    y: number;

    constructor(x_in: number, y_in: number) {
      this.x = x_in;
      this.y = y_in;
    }
    getX(): number {
      return this.x;
    }
    getY(): number {
      return this.y;
    }
  }
}

let p = new Implement.MyPoint(5, 10);
console.log('getX=', p.getX());
console.log('getY=', p.getY());

///////////////////////////////////////
//
console.log(JSON.stringify({ foo: 123 }));
console.log(JSON.stringify({ foo2: undefined }));
console.log(JSON.stringify({ foo3: null }));

///////////////////////////////////////
//
const s1 = Symbol('foo');
const s2 = Symbol('foo');
console.log(s1 === s1);

///////////////////////////////////////
//
//const x: bigint = 100n;
//console.log(x);

///////////////////////////////////////
//
function getdeviceinfo(): [string, number, boolean] {
  return ['C5500', 40001, true];
}

const devinfo: [string, number, boolean] = getdeviceinfo();
console.log(devinfo[0]);
console.log(devinfo[1]);
console.log(devinfo[0].length);

function delay(mils: number, count: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(count);
    }, mils);
  });
}

async function take3Seconds(): Promise<string> {
  let count: number = await delay(3000, 3);
  return 'take3seconds done';
}

async function take5Seconds(): Promise<number> {
  let count: number = await delay(3000, 5);
  return count;
}

async function runtuple() {
  const tupledata: [string, number] = await Promise.all([
    take3Seconds(),
    take5Seconds()
  ]);

  console.log(tupledata);

  const str: string = await take3Seconds();
  console.log(str);
  const num: number = await take5Seconds();
  console.log('take5Seconds done');
  console.log(num);
  console.log('------------------');
}

runtuple();

///////////////////////////////////////////
//
const sample: object = {
  year: 1999,
  month: 7
};
console.log(sample);
const copiedsample: object = { ...sample };
console.log(copiedsample);

const map1 = new Map([
  ['.js', 'JS'],
  ['.ts', 'TS']
]);
const map2 = new Map(map1);
console.log(map1);
console.log(map2);
console.log(map1 === map2);

const set1 = new Set([1, 2, 3]);
const set2 = new Set(set1);
console.log(set1);
console.log(set2);
console.log(set1 === set2);

const arr1 = [5, 6, 7];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

///////////////////////////////////////////
//
const obj1: object = {
  firstName: 'Mike',
  middleName: 'John',
  lastName: 'Piazza'
};

const obj2: object = {
  firstName: 'Paul',
  lastName: 'Smith'
};

console.log(obj1);
console.log(obj2);
const obj3: object = { ...obj1, ...obj2 };
console.log(obj3);

///////////////////////////////////////////
//
const profile = {
  name: 'Mike',
  twitter: 'twitname',
  github: 'miketorii',
  country: 'US',
  city: 'Irvine',
  state: 'CA',
  zipcode: '92612',
  phone: '9498881234'
};

const sns = (({ twitter, github }) => ({ twitter, github }))(profile);
console.log(sns);

const addr = (({ name, twitter, github, ...rest }) => rest)(profile);
console.log(addr);

///////////////////////////////////////////
//
type Point = {
  x: number,
  y: number
};

function printPoint(point: Point){
  console.log('x='+point.x+' y='+point.y);  
}

printPoint({x: 10, y: 20});

type returnstr = (str: string) => string;

function printName(str: string) : string {
  return 'Hello '+str; 
}

function calledfunction(name: string, callfunc: returnstr){
  let printstr = name + callfunc('world');
  console.log(printstr);
}

calledfunction('Mike', printName);

///////////////////////////////////////////
//
class Octopus {
  readonly name: string;
  readonly legs = 8;

  constructor() {
    this.name = 'mike mike';
  }
}

const octobj = new Octopus();
console.log(octobj.name);
console.log(octobj.legs);
//octobj.legs = 9;

///////////////////////////////////////////
//
const currencies = ["CNY", "EUR", "GBP", "JPY", "USD"] as const;
type Currency = (typeof currencies)[number];
let cur : Currency;
cur = "CNY";
//cur = "MMM";
console.log(cur);

type ErrorCode = 400 | 401 | 402 | 403 | 404 | 405;
let err : ErrorCode;
err = 400;
//err = 500;
console.log("err = "+err);

///////////////////////////////////////////////////
//
function callEither<T>(arg1: T, arg2: T) : T {
	 return Math.random() <= 0.5? arg1 : arg2;
}

let retx = callEither<number>(100, 999);
console.log(retx);
let rets = callEither<string>("ok","error");
console.log(rets);

//////////////////////////////////////////////////
//
