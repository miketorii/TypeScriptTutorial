// const
const testval = 123;
console.log(testval);

//destructing
var rect = { x: 0, y: 10, width: 15, height: 20};
console.log(rect);
var {width, x, height, y} = rect;
console.log(x, y, width, height);
rect.x = 10;
({width, x, height, y} = rect);
console.log(x, y, width, height);

var {w, x, ...remaining} = {w:1, x:2, y:3, z:4};
console.log(w,x,remaining);

var x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);

// spread
var list = [1, 2];
list = [...list, 3, 4];
console.log(list);
var list2 = [1, 2];
list2 = [0, ...list2, 4];
console.log(list2);

const point2D = {x:1, y:2};
const point3D = {...point2D, z:3};
console.log(point3D);

//for of
var someArray = [9, 2, 5];
for(var item in someArray){
    console.log(item);
}
for(var item2 of someArray){
    console.log(item2);
}

enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

//var card = CardSuit.Clubs;
var card = CardSuit.Diamonds;
console.log("----------")
console.log(card);

