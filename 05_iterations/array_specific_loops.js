//for of
const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    //console.log(num)
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
map["AUS"] = "Australia" //not a key value pair, just adds a property to js object

console.log(map)

for (const element of map) {
    console.log(element)
}

for (const [key, value] of map) {
    console.log(key)
}