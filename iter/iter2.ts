class Component {
    constructor(public name: string) {

    }
}

class Frame implements IterableIterator<Component>{
    private pointer = 0;

    constructor(public name: string, public components: Component[] ){

    }

    public next(): IteratorResult<Component>{
        if(this.pointer < this.components.length){
            return {
                done: false,
                value: this.components[this.pointer++]
            }
        } else {
            return { 
                done: true,
                value: null
            }
        }
    }

    [Symbol.iterator](): IterableIterator<Component>{
        return this;
    }
}

let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("right"), new Component("left")]);
let ret1 = frame.next();
console.log(ret1.value);
let ret2 = frame.next();
console.log(ret2.value);
let ret3 = frame.next();
console.log(ret3.value);
let ret4 = frame.next();
console.log(ret4.value);
let ret5 = frame.next();
console.log(ret5.value);

let frame2 = new Frame("Door2", [new Component("top2"), new Component("bottom2"), new Component("right2"), new Component("left2")]);
console.log("-----------");
for (let cmp of frame2){
    console.log(cmp);
}