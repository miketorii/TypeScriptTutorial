import { Point } from "./point";
import { Point3D } from "./point3d";

console.log("-----------Point---------------------");
var p1 = new Point(0, 10);
var p2 = new Point(10,20);
var p3 = p1.add(p2);
p3.print();

console.log("-----------Point3D---------------------");
var p4 = new Point3D(10,20,30);
var p5 = new Point3D(100,200,300);
var p6 = p4.add(p5);
p6.print();

