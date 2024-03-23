class Point {
    protected _x: number;
    protected _y: number;

    constructor(x: number, y: number){
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }
    get y(): number {
        return this._y;
    }

    add(point: Point){
        return new Point(this._x+point.x, this._y+point.y);
    }
    print(){
        console.log("---Point---");
        console.log(this._x);
        console.log(this._y);
    }
}
export{ Point };
