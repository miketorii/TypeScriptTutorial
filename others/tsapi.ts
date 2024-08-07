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

