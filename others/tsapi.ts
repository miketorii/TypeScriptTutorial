/////////////////////////////////////////
//

const map = new Map<string, number>();

map.set("mike", 55);
map.set("tom", 51);

console.log("mike=", map.get("mike"));
console.log("tom=", map.get("tom"));

console.log("----------------------");
for (const [key, value] of map){
    console.log(key, value);
}
console.log("----------------------");

console.log(map);
console.log(map.has("tom"));
map.delete("tom");
console.log(map);
console.log(map.has("tom"));

/////////////////////////////////////////
//
const f = new Set(["apple","orange","grape"]);
console.log(f);

const ff = new Set<string>();
ff.add("mike");
ff.add("tom");
ff.add("john");
console.log(ff);

const array = [...ff];
console.log(array);
console.log(JSON.stringify(array));

console.log("----------------------");
for (const i of ff){
    console.log(i);
}
console.log("----------------------");

ff.delete("tom");
console.log(ff);

console.log(ff.has("mike"));

/////////////////////////////////////////
//

