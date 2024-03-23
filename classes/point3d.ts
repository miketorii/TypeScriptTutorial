import { Point } from "./point";

class Point3D extends Point {
    private _z: number;
    constructor(x: number, y: number, z: number){
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    add(point: Point3D){
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this._z+point.z);
    }

    print(): void {
        console.log("----Point3D----");
        console.log(this._x);
        console.log(this._y);
        console.log(this._z);
    }
}
export { Point3D };


