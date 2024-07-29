//////////////////////////////////////////////////
//  enum

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

enum Color {
    DarkRed = 3,
    DarkGreen,
    DarkBlue
}

console.log("enum Color: ", Color.DarkGreen);

enum AnimalFlags {
    None        = 0,
    HasClows    = 1 << 0,
    CanFly      = 1 << 1,
    EatsFish    = 1 << 2,
    Endangered  = 1 << 3
}

console.log("enum AnimalFlags.HasClows=", AnimalFlags.HasClows);
console.log("enum AnimalFlags.EatsFish=", AnimalFlags.EatsFish);
console.log("enum AnimalFlags.Endangered=", AnimalFlags.Endangered);

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

        constructor(x_in: number, y_in: number){
            this.x = x_in;
            this.y = y_in;
        } 
        getX() : number
        {
            return this.x;
        }
        getY() : number
        {
            return this.y;
        }
    }
}

let p = new Implement.MyPoint(5,10);
console.log("getX=",p.getX());
console.log("getY=", p.getY());

